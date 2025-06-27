// Optimized and Cleaned Up Scenario 2 Script - With Order Creation and Payment

import { sleep, group, check } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export const options = {
  vus: 1,
  duration: '30s',
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
  const vars = {};

  // Checkout Page Load
  group('Checkout Page Data Load', function () {
    console.log('--- Starting checkout page data load ---');
    const urls = [
      'https://user-dev.delivergate.com/api/v1/waebshop_customer/address',
      'https://admin-dev.delivergate.com/api/v1/outlet/open-close/2?b=1',
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/social-link?outlet_id=2',
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/promotion?outlet_id=2',
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/contact-us?outlet_id=2',
      'https://user-dev.delivergate.com/api/v1/webshop_customer/current',
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-platform',
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
      'https://user-dev.delivergate.com/api/v1/webshop_customer/check-first-order-offer-eligibility?shop_id=2&webshop_brand_id=1&device_platform=web',
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details'
    ];

    urls.forEach((url) => {
      const res = http.get(url, { headers: AUTH_HEADERS });
      check(res, {
        [`${url} status is 200`]: (r) => r.status === 200,
      });
      sleep(0.5);
    });

    const currentUserRes = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', { headers: AUTH_HEADERS });
    const firstName = jsonpath.query(currentUserRes.json(), '$.data.first_name')[0];
    const lastName = jsonpath.query(currentUserRes.json(), '$.data.last_name')[0];
    vars['customer_name1'] = firstName;
    vars['last_name1'] = lastName;
    console.log(`Extracted customer: ${firstName} ${lastName}`);
  });

  // 1. CREATE TEMPORARY ORDER
  console.log('--- Creating temporary order ---');
  const createOrderPayload = JSON.stringify({
    getOrder: {
      shipping_method: "COLLECTION",
      shop_id: 2,
      platform_id: 5,
      sub_total: 7693.00,
      delivery_date_time: "2025-06-11T17:47:30+05:30",
      delivery_distance: 0,
      vouchers: [],
      total_amount: 7918.00,
      discount: 0,
      discount_type: "",
      campaign_code: "",
      note: "make more crispy",
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
      customer: {
        first_name: "Guest",
        last_name: "Tharushi",
        location_id: "501",
        lat_lng: null,
        email: "sooriyabandaratharushi@gmail.com",
        address: null,
        flat_no: null,
        contact_number: "+44762881444",
        phone: "762881444",
        country_code: "+44"
      },
      receiver: {
        first_name: "Guest",
        last_name: "Tharushi",
        email: "sooriyabandaratharushi@gmail.com",
        address_line_1: null,
        address_line_2: null,
        phone: "762881444",
        country_code: "+44"
      },
      order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
      total_fee: 225
    },
    device_platform: "web",
    rwg_token: "",
    saveType: "SAVE_AND_FORWORD",
    paymentMethod: "card",
    paymentType: "PAY_ONLINE",
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
        name: vars['customer_name1'],
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
    paymentType: "PAY_ONLINE",
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