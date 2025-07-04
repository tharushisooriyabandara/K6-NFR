import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export const options = {
  vus: 1,
  duration: '30s',
  iterations: 2,
};

export default function () {
  const headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-tenant-code': 'subway',
  };

  // 1. CREATE TEMPORARY DELIVERY ORDER
  const createOrderPayload = JSON.stringify({
    getOrder: {
      shipping_method: "DELIVERY",          // changed from COLLECTION
      shop_id: 2,
      platform_id: 5,
      sub_total: 7693.00,
      delivery_date_time: "2025-06-17T16:00:00+05:30",
      delivery_distance: 7277,              // set realistic distance for delivery
      vouchers: [],
      total_amount: 7918.00,
      discount: 0,
      discount_type: "",
      campaign_code: "",
      note: "make more crispy",
      delivery_cost: 600,                   // delivery cost instead of zero
      total_tax: 0,
      orderproducts: [
        {
          temp_id: "Item_id_263_1265",
          item_id: 263,
          quantity: 7,
          price_per_item: "8.99",
          item_name: "Pizza",
          tax: "0.00",
          is_sale: false,
          is_bogo: false,
          bogo_buy_quantity: 0,
          bogo_get_quantity: 0,
          sale_price: null,
          original_price: null,
          discount_amount: 0,
          total: 10.99,
          modifierDetails: [
            {
              modifier_main: "Select Pizza Size",
              modifier_main_item: 195,
              modifier_item: {
                id: 1265,
                entity_id: 232,
                delivery_platform_id: 5,
                external_item_id: "232",
                plu: "232",
                price: "2.00",
                item_name: 'MED 12" (8 slices)',
                allergies: "a:0:{}",
                available: 1,
                available_from: null,
                modifier_list: []
              },
              modifier_item_name: 'MED 12" (8 slices)',
              modifiers: []
            }
          ],
          item_category_id: 1
        }
      ],
      customer: {
        first_name: "Guest",
        last_name: "Tharushi",
        location_id: "501",
        lat_lng: null,
        email: "sooriyabandaratharushi@gmail.com",
        address: "17, Nugegoda, Sri Lanka",  // delivery address filled
        flat_no: "17",
        contact_number: "+44762881444",
        phone: "762881444",
        country_code: "+44"
      },
      receiver: {
        first_name: "Guest",
        last_name: "Tharushi",
        email: "sooriyabandaratharushi@gmail.com",
        address_line_1: "17",
        address_line_2: "Nugegoda, Sri Lanka",
        phone: "762881444",
        country_code: "+44"
      },
      order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
      total_fee: 825                         // 225 + 600 delivery cost
    },
    device_platform: "web",
    rwg_token: "",
    saveType: "SAVE_AND_FORWORD",
    paymentMethod: "cash",
    paymentType: "PAY_ON_DELIVERY",         // changed from PAY_ON_COLLECTION
    save_card: 0,
    subscribe_to_promotion_emails: 0
  });

  const createParams = {
    headers: headers,
    tags: { type: 'create' }
  };

  const createOrderRes = http.post(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
    createOrderPayload,
    createParams
  );

  if (!check(createOrderRes, {
    'Create order - status is 200': (r) => r.status === 200,
    'Create order - has valid response': (r) => {
      try {
        JSON.parse(r.body);
        return true;
      } catch {
        return false;
      }
    }
  })) {
    console.error('Create order failed. Status:', createOrderRes.status, 'Body:', createOrderRes.body);
    return;
  }

  let tmpOrderID;
  try {
    const responseBody = JSON.parse(createOrderRes.body);
    tmpOrderID = responseBody.data?.createdTmpOrderId || responseBody.createdTmpOrderId;

    if (!tmpOrderID) {
      console.error('tmpOrderID missing in response. Full response:', createOrderRes.body);
      return;
    }

    console.log(`Successfully created temp delivery order with ID: ${tmpOrderID}`);
  } catch (e) {
    console.error('Failed to parse create order response:', e, 'Response:', createOrderRes.body);
    return;
  }

  // 2. COMPLETE TEMPORARY ORDER
  const completePayload = JSON.stringify({
    tmpOrderID: tmpOrderID,
    paymentStatus: "success",
    paymentType: "PAY_ON_DELIVERY",
    rwg_token: ""
  });

  const completeParams = {
    headers: headers,
    tags: { type: 'complete' }
  };

  const completeOrderRes = http.put(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
    completePayload,
    completeParams
  );

  let completeResponse;
  try {
    completeResponse = JSON.parse(completeOrderRes.body);
    console.log('Complete order response:', JSON.stringify(completeResponse, null, 2));
  } catch (e) {
    console.error('Failed to parse complete order response:', e, 'Response:', completeOrderRes.body);
  }

  const completionChecks = {
    'Complete order - status is 200': (r) => r.status === 200,
    'Complete order - has valid response': (r) => !!completeResponse,
  };

  if (completeResponse) {
    const responseTmpOrderId = completeResponse.data?.tmpOrderId ||
                              completeResponse.tmpOrderId ||
                              completeResponse.data?.orderId ||
                              completeResponse.orderId;

    if (responseTmpOrderId) {
      completionChecks['Complete order - tmpOrderID matches'] =
        () => responseTmpOrderId.toString() === tmpOrderID.toString();
    }
  }

  if (!check(completeOrderRes, completionChecks)) {
    console.error('Complete order failed. Status:', completeOrderRes.status, 'Body:', completeOrderRes.body);
  }

  sleep(1);
}