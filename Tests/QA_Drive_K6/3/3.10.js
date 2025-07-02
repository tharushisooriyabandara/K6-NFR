// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  // Replace this with your actual order ID from 3.9.js
  const orderId = '17928';

  // Call the order details API
  const res = http.get(
    `https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/${orderId}/main-menu/68`,
    {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-tenant-code': 'subway',
      },
    }
  );

  if (res.status === 200) {
    const data = res.json().data;

    // Print order summary in your requested format
    console.log(`Track Your Order!`);
    console.log(`Order #${data?.display_order_id || orderId}`);
    console.log(`${data?.delivery_date_time || ''}\n`);

    console.log(`${data?.status === 'ACCEPTED' ? 'Accepted' : data?.status || ''}`);
    console.log(`${data?.shipping_method === 'DELIVERY' ? 'Delivery Order' : data?.shipping_method || ''}`);
    console.log('Order Receipt');

    // Print items
    if (data?.products && Array.isArray(data.products)) {
      data.products.forEach(item => {
        console.log(`${item.quantity}x${item.item_name}`);
        console.log(`£ ${(Number(item.total) / 100).toFixed(2)}`);
      });
    }

    // Print notes
    if (data?.note) {
      console.log('Order Notes');
      console.log(data.note);
    }

    // Print totals
    console.log('Subtotal (Tax Inclusive)');
    console.log(`£ ${(Number(data?.sub_total || 0) / 100).toFixed(2)}`);

    // Service Charge
    let serviceCharge = 0;
    if (data?.shopFee && Array.isArray(data.shopFee) && data.shopFee.length > 0) {
      serviceCharge = Number(data.shopFee[0].amount);
    }
    console.log('Service Charge');
    console.log(`£ ${serviceCharge.toFixed(2)}`);

    // Delivery Cost
    const deliveryCost = Number(data?.shipping_total || 0);
    console.log('Delivery Cost');
    console.log(`£ ${deliveryCost.toFixed(2)}`);

    // Total
    console.log('Total');
    console.log(`£ ${(Number(data?.total_amount || 0) / 100).toFixed(2)}`);
  } else {
    console.error('Failed to fetch order details. Status:', res.status);
  }

  sleep(1);
}