// Optimized and Cleaned Up Scenario 2 Script - With Order Creation and Payment

import { sleep, group, check } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';

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

export const options = {
  vus: 1,
  duration: '1m',
  iterations: 2,
  insecureSkipTLSVerify: true,
};

const BASE_HEADERS = {
  'accept': 'application/json',
  'access-control-allow-origin': '*',
  'content-type': 'application/json',
  'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'x-tenant-code': 'subway',
};

const AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYTdjMWRjYWU1ZjJlNDRmZGNkNTRkZDBkZDNjYzVkOThlOWRkOTlmNTM2NjNmOTUwN2E3ODYyNWZjMzFmMzRiZTkxYjc0ZWM2ZmE3OTZkOGYiLCJpYXQiOjE3NTAxMzM3MTguMjYxMTg3LCJuYmYiOjE3NTAxMzM3MTguMjYxMTksImV4cCI6MTc4MTY2OTcxOC4yNDk5MTcsInN1YiI6IjE4MDkiLCJzY29wZXMiOltdfQ.RRr_it_rRDaM21k09O5It38XL7Hi7kSyypgHJvd22SyYPF0c4jd-X43xPafac3Mrpyzc_ms5FxnU8ebktIvStYM8JQ0rqAFXuI67smbhbfRDPvo2Nzs0bEnofPA5Qi4SQHKYwQhVrQbaZsOSTVnHDM8D84LvEQ9roSqwLZFp3DgKuFWoZ11YsurDf_C85rEr7JMw8oWp6dHszHza_bZMCeisMDmf3Drgsc-okDGBPZy-zG9dtikkJlKrPrF5obM586lMWRuaYZOEoJowRPy8tPKLy7GWiJ2ET66pnLUwQ6qGOBhH4_ivIWXc-gjHcuA_DzFQNjAcylll6QZc0o6BS0_V-Ru-riIfZstMJSRe9hP-g7vfzYb7_CVbYXnpSLcMp-DG9QliVQrw_wDJsEcYKbB5gGvtTzMKnlrnXr6ZcEbGL4YsfDYAVhiQPm-QaWyE71J5I6RxorzPiScAwt3UvbVVQuowkNzzDDXdWGb_XjSoh5LNdCtZ5p69z8fr2i90SrvCmQ9VYZN16TMkKAR-4B1cQOuht3KlSKCypXFRBSPiJE_bhwz2cEY3dsResP9gWgkJLBq7N6TIeUhk5Co1h1_79HSHRsHh57mQOyflQr5FKTkrqQvg4FeI1FMlMWSoGYkG7cH3IfF0Ayo47gVjsAj8ppmVOOZVDSqLf6C9nac';
const AUTH_HEADERS = { ...BASE_HEADERS, authorization: AUTH_TOKEN };

export default function main() {

    
  
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

  // 1. CREATE TEMPORARY ORDER
  console.log('--- Creating temporary order ---');
  const createOrderPayload = JSON.stringify({
    getOrder: {
      shipping_method: "COLLECTION",
      shop_id: 2,
      platform_id: 5,
      sub_total: 7693.00,
      delivery_date_time: getCurrentISTDateTime(),
      delivery_distance: 0,
      vouchers: [],
      total_amount: 7918.00,
      discount: 0,
      discount_type: "",
      campaign_code: "",
      note: "test note",
      delivery_cost: 0,
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
      customer: customerDetails,
      receiver: receiverDetails,
      order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
      total_fee: 225
    },
    device_platform: "web",
    rwg_token: "",
    saveType: "SAVE_AND_FORWORD",
    paymentMethod: "card",
    paymentType: "stripe",
    save_card: 0,
    subscribe_to_promotion_emails: 0
  });

  const createOrderRes = http.post(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
    createOrderPayload,
    { headers: BASE_HEADERS, tags: { type: 'create' } }
  );

  check(createOrderRes, {
    'Create order - status is 200': (r) => r.status === 200,
  });

  const tmpOrderID = JSON.parse(createOrderRes.body).data?.createdTmpOrderId;
  console.log(`Temporary order ID: ${tmpOrderID}`);
  if (!tmpOrderID) return;

  // 2. PAYMENT
  group('page_5 - Payment Submission', function () {
    console.log('--- Submitting payment ---');
    const paymentRes = http.post(
      'https://mitakeaway.sandbox-cresecure.net/securepayments/a1/cc_collection.php?sid=3nd94v4jknfuo7lftr87ahq18f&action=process&t=1750144795',
      {
        name: userInfo.first_name + ' ' + userInfo.last_name,
        card_type: 'MasterCard',
        PAN: '5555555555554444',
        cresecure_cc_expires_month: '08',
        cresecure_cc_expires_year: '25',
        cv_data: '123',
      },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    check(paymentRes, {
      'Payment POST status is 200': (r) => r.status === 200,
    });
    console.log(`Payment response status: ${paymentRes.status}`);
  });

  // 3. COMPLETE ORDER
  console.log('--- Completing order ---');
  const completePayload = JSON.stringify({
    tmpOrderID: tmpOrderID,
    paymentStatus: "success",
    paymentType: "stripe",
    rwg_token: ""
  });

  const completeOrderRes = http.put(
    'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
    completePayload,
    { headers: BASE_HEADERS, tags: { type: 'complete' } }
  );

  check(completeOrderRes, {
    'Complete order - status is 200': (r) => r.status === 200,
    'Complete order - valid response': (r) => !!r.body && r.body.includes('success'),
  });
  console.log(`Complete order response: ${completeOrderRes.status}`);

  sleep(1);
}