import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

// Helper to get current date-time in required format
function getCurrentISTDateTime() {
  const date = new Date();
  const pad = (num) => String(num).padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
}

export default function main() {
  let response

  group('page_1 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/checkout', function () {
    // 1. Create temp order
    const createOrderPayload = {
      getOrder: {
        shipping_method: "DELIVERY",
        shop_id: 2,
        platform_id: 5,
        sub_total: 2400,
        delivery_date_time: getCurrentISTDateTime(), // <-- current date-time here
        delivery_distance: "7277",
        vouchers: [],
        total_amount: 3225,
        discount: 0,
        discount_type: "",
        campaign_code: "",
        note: "make more crispy",
        delivery_cost: 600,
        total_tax: 0,
        orderproducts: [
          {
            temp_id: "Item_id_11_57",
            item_id: 11,
            quantity: 6,
            price_per_item: "3.00",
            item_name: "Paneer Tikka",
            tax: "0.00",
            is_sale: false,
            is_bogo: false,
            bogo_buy_quantity: 0,
            bogo_get_quantity: 0,
            sale_price: null,
            original_price: null,
            discount_amount: 0,
            total: 4,
            modifierDetails: [
              {
                modifier_main: "Choose Beverage",
                modifier_main_item: 257,
                modifier_item: {
                  id: 57,
                  entity_id: 28,
                  delivery_platform_id: 5,
                  external_item_id: "28",
                  plu: "28",
                  price: "1.00",
                  item_name: "Coke Original",
                  allergies: "a:0:{}",
                  available: 1,
                  available_from: null,
                  modifier_list: []
                },
                modifier_item_name: "Coke Original",
                modifiers: []
              }
            ],
            item_category_id: 3
          }
        ],
        customer: {
          first_name: "Guest",
          last_name: "Tharushi",
          location_id: null,
          lat_lng: { lat: 6.8649081, lng: 79.8996789 },
          email: "sooriyabandaratharushi@gmail.com",
          address: "Nugegoda, Sri Lanka",
          flat_no: "fef",
          contact_number: "+44762881444",
          phone: "762881444",
          country_code: "+44"
        },
        receiver: {
          first_name: "Guest",
          last_name: "Tharushi",
          email: "sooriyabandaratharushi@gmail.com",
          address_line_1: "fef",
          address_line_2: "Nugegoda, Sri Lanka",
          phone: "762881444",
          country_code: "+44"
        },
        order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
        total_fee: 825
      },
      device_platform: "web",
      rwg_token: "",
      saveType: "SAVE_AND_FORWORD",
      paymentMethod: "cash",
      paymentType: "PAY_ON_DELIVERY",
      save_card: 0,
      subscribe_to_promotion_emails: 0
    };

    response = http.post(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
      JSON.stringify(createOrderPayload),
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    );

    // Extract temp order ID
    let tempOrderId = null;
    try {
      const body = response.json();
      tempOrderId = body?.data?.createdTmpOrderId || body?.data?.tmpOrderID || null;
    } catch (e) {
      console.error('Failed to parse temp order response:', e);
    }

    if (tempOrderId) {
      console.log('Temporary Order ID:', tempOrderId);

      // 2. Complete the order using the extracted temp order ID
      const completeOrderPayload = {
        tmpOrderID: tempOrderId,
        paymentStatus: "success",
        paymentType: "PAY_ON_DELIVERY",
        rwg_token: ""
      };

      response = http.put(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
        JSON.stringify(completeOrderPayload),
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      );
      console.log('Order completion status:', response.status);
    } else {
      console.error('Could not extract temp order ID, skipping order completion.');
    }

    sleep(1);
  });
}
