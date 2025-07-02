import http from 'k6/http';

export const options = { vus: 1, duration: '1m' }

function printOrderSummary(orderData) {
  console.log('Track Your Order!');
  console.log(`Order #${orderData?.display_order_id || orderData?.order_code || ''}`);
  console.log(`${orderData?.delivery_date_time || orderData?.created_at || ''}\n`);

  console.log(orderData?.status === 'ACCEPTED' ? 'Accepted' : orderData?.status || '');
  console.log(orderData?.shipping_method === 'DELIVERY' ? 'Delivery Order' : orderData?.shipping_method || '');
  console.log('Order Receipt');

  // Print items and modifiers
  if (orderData?.products && Array.isArray(orderData.products)) {
    orderData.products.forEach(item => {
      console.log(`${item.quantity}x${item.item_name}`);
      // Item total (assuming price is in cents)
      console.log(`£ ${(Number(item.total) / 100).toFixed(2)}`);
      // Modifiers
      if (item.modifiers && Array.isArray(item.modifiers) && item.modifiers.length > 0) {
        item.modifiers.forEach(mod => {
          if (mod.modifier_item_name && mod.price_per_item) {
            console.log(`${mod.modifier_item_name} £ ${(Number(mod.price_per_item) / 100).toFixed(2)}`);
          }
        });
      }
    });
  }

  // Print notes
  if (orderData?.note) {
    console.log('Order Notes');
    console.log(orderData.note);
  }

  // Print totals
  console.log('Subtotal (Tax Inclusive)');
  console.log(`£ ${(Number(orderData?.sub_total || 0) / 100).toFixed(2)}`);

  // Service Charge
  let serviceCharge = 0;
  if (orderData?.shopFee && Array.isArray(orderData.shopFee) && orderData.shopFee.length > 0) {
    serviceCharge = Number(orderData.shopFee[0].amount);
  }
  console.log('Service Charge');
  console.log(`£ ${serviceCharge.toFixed(2)}`);

  // Delivery Cost
  const deliveryCost = Number(orderData?.shipping_total || orderData?.delivery_cost || 0);
  console.log('Delivery Cost');
  console.log(`£ ${deliveryCost.toFixed(2)}`);

  // Total
  console.log('Total');
  console.log(`£ ${(Number(orderData?.total_amount || 0) / 100).toFixed(2)}`);
}

export default function () {
  const orderId = '17974'; // Replace with your order id
  const res = http.get(
    `https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/${orderId}/main-menu/68`,
    {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        authorization: 'Bearer ...', // your token
        'content-type': 'application/json',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    }
  );

  if (res.status === 200) {
    const data = res.json().data;
    printOrderSummary(data);
  } else {
    console.error('Failed to fetch order details. Status:', res.status);
  }
}