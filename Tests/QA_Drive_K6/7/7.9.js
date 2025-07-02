// Creator: Grafana k6 Browser Recorder 1.0.8

import http from 'k6/http'
import { check, sleep, group } from 'k6'

export const options = { vus: 1, duration: '1m' }

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

export default function mains() {
  group('Create and Complete Guest Order', function () {
    // 1. Create temporary order
    const createOrderPayload = {
      getOrder: {
        shipping_method: 'DELIVERY',
        shop_id: 2,
        platform_id: 5,
        sub_total: 2500,
        delivery_date_time: getCurrentISTDateTime(), // <-- use current datetime here
        delivery_distance: '127977',
        vouchers: [],
        total_amount: 2925,
        discount: 0,
        discount_type: '',
        campaign_code: '',
        note: 'make fresh & hot',
        delivery_cost: 200,
        total_tax: 0,
        orderproducts: [
          {
            temp_id: 'Item_id_11_57_56',
            item_id: 11,
            quantity: 5,
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
            total: 5,
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
              {
                modifier_main: 'Choose Beverage',
                modifier_main_item: 257,
                modifier_item: {
                  id: 56,
                  entity_id: 29,
                  delivery_platform_id: 5,
                  external_item_id: '29',
                  plu: '29',
                  price: '1.00',
                  item_name: 'Fanta Orange',
                  allergies: 'a:0:{}',
                  available: 1,
                  available_from: null,
                  modifier_list: [],
                },
                modifier_item_name: 'Fanta Orange',
                modifiers: [],
              },
            ],
            item_category_id: 3,
          },
        ],
        customer: {
          first_name: 'Guest',
          last_name: 'User',
          location_id: '655',
          lat_lng: { lat: 6.8649081, lng: 79.8996789 },
          email: 'guest@example.com',
          address: 'Colombo, Sri Lanka',
          flat_no: '1A',
          contact_number: '+94000000000',
          phone: '0000000000',
          country_code: '+94',
        },
        receiver: {
          first_name: 'Guest',
          last_name: 'User',
          email: 'guest@example.com',
          address_line_1: 'Colombo, Sri Lanka',
          address_line_2: 'Colombo, Sri Lanka',
          phone: '0000000000',
          country_code: '+94',
        },
        order_shop_fees: [{ shop_fee_id: 1, amount: 225 }],
        total_fee: 425,
      },
      device_platform: 'web',
      rwg_token: '',
      saveType: 'SAVE_AND_FORWORD',
      paymentMethod: 'cash',
      paymentType: 'PAY_ON_DELIVERY',
      save_card: 0,
      subscribe_to_promotion_emails: 0,
    }

    const createRes = http.post(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
      JSON.stringify(createOrderPayload),
      {
        headers: {
          accept: 'application/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'x-tenant-code': 'subway',
        },
      }
    )

    check(createRes, { 'Temp order created': (r) => r.status === 200 })

    // 2. Extract temp order ID
    let tempOrderId = null
    try {
      const body = createRes.json()
      tempOrderId = body?.data?.createdTmpOrderId || body?.data?.tmpOrderID || null
    } catch (e) {
      console.error('Failed to parse temp order response:', e)
    }

    if (tempOrderId) {
      console.log('Temporary Order ID:', tempOrderId)

      // 3. Complete the order using the extracted temp order ID
      const completeOrderPayload = {
        tmpOrderID: tempOrderId,
        paymentStatus: 'success',
        paymentType: 'PAY_ON_DELIVERY',
        rwg_token: '',
      }

      const completeRes = http.put(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
        JSON.stringify(completeOrderPayload),
        {
          headers: {
            accept: 'application/json',
            'access-control-allow-origin': '*',
            'content-type': 'application/json',
            'x-tenant-code': 'subway',
          },
        }
      )
      check(completeRes, { 'Order completed': (r) => r.status === 200 })
      console.log('Order completion status:', completeRes.status)
    } else {
      console.error('Could not extract temp order ID, skipping order completion.')
    }
    sleep(1)
  })
}