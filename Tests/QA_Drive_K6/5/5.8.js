import http from 'k6/http';
import { sleep, check } from 'k6';
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';

export const options = {
  vus: 1,
  duration: '1m',
};

export default function () {
  // Login payload
  const loginPayload = JSON.stringify({
    username: 'sooriyabandaratharushi@gmail.com',
    password: '109062961449707363647',
    grant_type: 'password',
    client_id: '4',
    client_secret: 'wi1ciuewRqbIHgoEQMizPUyx0dYnBknDnojLWXGa',
    scope: '',
    account_brand: '1',
    tok: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4MjUwM2E1ZmQ1NmU5ZjczNGRmYmE1YzUwZDdiZjQ4ZGIyODRhZTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNDM5MTAwMzE5MDMtZmI2YWpqaGNzMDdydnFqc29zN2Eza2k4ZW1idGgzcW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyNDM5MTAwMzE5MDMtZmI2YWpqaGNzMDdydnFqc29zN2Eza2k4ZW1idGgzcW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDkwNjI5NjE0NDk3MDczNjM2NDciLCJlbWFpbCI6InNvb3JpeWFiYW5kYXJhdGhhcnVzaGlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTc1MTI5ODA3OSwibmFtZSI6IlRoYXJ1c2hpIFNvb3JpeWFiYW5kYXJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tSNmp2cjNuVXJsYVBfd280T3F0OWZJUDF4UWh5Q05TM25Ob0tMTVdmNWlIUVR5NUo1PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRoYXJ1c2hpIiwiZmFtaWx5X25hbWUiOiJTb29yaXlhYmFuZGFyYSIsImlhdCI6MTc1MTI5ODM3OSwiZXhwIjoxNzUxMzAxOTc5LCJqdGkiOiIwMTdiYmM3MjEyZTk2ZWQwYjYwOTE3MDQ3ZDc2NjEyNWVhNWYyNDI0In0.UwSJzMkLpyK_SDIlAXS-jQd6SV0Uj1azEPBT7QiwO6-4taLt63hYWleugS9GXA8pPHykxD_k1v3bTRkxvIh8kGyqvNV3tyDbD4rF2qJpoPZOv83UXVuz0_jGkqN2a-DPgYgmzWCAamZDnJMzl-07_qH3EwNMKnVXHCVIahwL26qEOITy5160gGpjgnfxcINRiyLsfp89J6EDHu1lt6vIgT4WhVcFsqrGX9-dxCRA5893EHAcJqLq1xuO3ZTvJKHHIgi9cF-KinrtosSf3M2_LFKL23BpuNDOJTgi3r0JXDzV_XATVquW7ZAfwQ5WHdrK7LA0Cj4Tv3feacpYJvHZ-g',

    s: 'google',
  });

  const loginRes = http.post(
    'https://user-dev.delivergate.com/api/v1/webshop_customer/login',
    loginPayload,
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-tenant-code': 'subway',
      },
    }
  );

  check(loginRes, {
    'login successful': (res) => res.status === 200,
    'token received': (res) => jsonpath.query(res.json(), '$.accessToken').length > 0,
  });

  const accessToken = jsonpath.query(loginRes.json(), '$.accessToken')[0];
  console.log('Access Token:', accessToken);

  sleep(1);

  // Get logged-in user details
  const userInfoRes = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${accessToken}`,
      'x-tenant-code': 'subway',
    },
  });

  const userInfo = userInfoRes.json().data;
  console.log('Logged-in user info:', JSON.stringify(userInfo, null, 2));

  const customerDetails = {
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    location_id: null,
    lat_lng: null,
    email: userInfo.email,
    address: null,
    flat_no: null,
    contact_number: userInfo.phone,
    phone: userInfo.phone,
    country_code: userInfo.country_code,
  };

  const receiverDetails = { ...customerDetails, address_line_1: null, address_line_2: null };

  // Create unpaid temp order
  const createOrderPayload = JSON.stringify({
    getOrder: {
      shipping_method: 'COLLECTION',
      shop_id: 2,
      platform_id: 5,
      sub_total: 2400,
      delivery_date_time: '2025-06-30T21:38:09+05:30',
      delivery_distance: 0,
      vouchers: [],
      total_amount: 2625,
      discount: 0,
      discount_type: '',
      campaign_code: '',
      note: 'hfhghfdh',
      delivery_cost: 0,
      total_tax: 0,
      orderproducts: [
        {
          temp_id: 'Item_id_11_57',
          item_id: 11,
          quantity: 6,
          price_per_item: '3.00',
          item_name: 'Paneer Tikka',
          tax: '0.00',
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
              modifier_main: 'Choose Beverage',
              modifier_main_item: 257,
              modifier_item: {
                id: 57,
                entity_id: 28,
                delivery_platform_id: 5,
                external_item_id: '28',
                plu: '28',
                price: '1.00',
                item_name: 'Coke Original',
                allergies: 'a:0:{}',
                available: 1,
                available_from: null,
                modifier_list: [],
              },
              modifier_item_name: 'Coke Original',
              modifiers: [],
            },
          ],
          item_category_id: 3,
        },
      ],
      customer: customerDetails,
      receiver: receiverDetails,
      order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
      total_fee: 225,
    },
    device_platform: 'web',
    rwg_token: '',
    saveType: 'SAVE_AND_FORWORD',
    paymentMethod: 'cash',
    paymentType: 'PAY_ON_COLLECTION',
    save_card: 0,
    subscribe_to_promotion_emails: 0,
  });

  const createOrderRes = http.post(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
    createOrderPayload,
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
        'x-tenant-code': 'subway',
      },
    }
  );

  check(createOrderRes, {
    'temp order created': (res) => res.status === 200,
  });

  console.log('Create Order Response:', createOrderRes.body);

  sleep(1);

  let tmpOrderID;
  try {
    const responseBody = JSON.parse(createOrderRes.body);
    tmpOrderID = responseBody.data?.createdTmpOrderId || responseBody.createdTmpOrderId;

    if (!tmpOrderID) {
      console.error('tmpOrderID missing in create order response. Full response:', createOrderRes.body);
      return;
    }

    console.log(`Successfully created temp order with ID: ${tmpOrderID}`);
  } catch (e) {
    console.error('Failed to parse create order response:', e, 'Response:', createOrderRes.body);
    return;
  }

  const completePayload = JSON.stringify({
    tmpOrderID: tmpOrderID,
    paymentStatus: "success",
    paymentType: "PAY_ON_COLLECTION",
    rwg_token: ""
  });

  const completeOrderRes = http.put(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
    completePayload,
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
        'x-tenant-code': 'subway',
      },
      tags: { type: 'complete' }
    }
  );

  let completeResponse;
  try {
    completeResponse = JSON.parse(completeOrderRes.body);
    console.log('Complete Order Response:', JSON.stringify(completeResponse, null, 2));
  } catch (e) {
    console.error('Failed to parse complete order response:', e, 'Response:', completeOrderRes.body);
  }

  check(completeOrderRes, {
    'complete order status is 200': (r) => r.status === 200,
    'complete order has valid response': () => !!completeResponse,
    // 'tmpOrderID matches': () => {
    //   const responseTmpOrderId = completeResponse?.data?.tmpOrderId ||
    //                             completeResponse?.tmpOrderId ||
    //                             completeResponse?.data?.orderId ||
    //                             completeResponse?.orderId;
    //   return responseTmpOrderId && responseTmpOrderId.toString() === tmpOrderID.toString();
    // }
  });

  sleep(1);
}