import http from 'k6/http';
import { sleep, check } from 'k6';

// Replace this with the actual Order ID or tmpOrderID you want to track
const orderId = 17677;

export const options = {
  vus: 1,
  duration: '1m',
};

export default function () {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'x-tenant-code': 'subway',
  };

  const url = `https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/${orderId}/main-menu/68`;

  const res = http.get(url, { headers });

  const success = check(res, {
    'Track order - status is 200': (r) => r.status === 200,
    'Track order - contains valid data': (r) => {
      try {
        const body = JSON.parse(r.body);
        return body?.data !== undefined;
      } catch (e) {
        return false;
      }
    },
  });

  if (!success) {
    console.error('Tracking failed:', res.status, res.body);
  } else {
    console.log('Tracking success:', res.body);
  }

  sleep(1);
}



// import http from 'k6/http';
// import { sleep, check } from 'k6';

// // Replace with actual order ID to track
// const orderId = 17677;

// export default function () {
//   const headers = {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     'x-tenant-code': 'subway',
//   };

//   const url = `https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/${orderId}/main-menu/68`;

//   const res = http.get(url, { headers });

//   const passed = check(res, {
//     'Track order - status is 200': (r) => r.status === 200,
//   });

//   if (!passed) {
//     console.error('Tracking failed:', res.status, res.body);
//     return;
//   }

//   let data;
//   try {
//     const body = JSON.parse(res.body);
//     data = body.data;

//     if (!data) {
//       console.error('No order data found in response.');
//       return;
//     }

//     const orderNumber = data.orderNo;
//     const orderDate = data.createdAt;
//     const status = data.status;
//     const orderType = data.shipping_method === 'COLLECTION' ? 'Collection Order' : 'Delivery Order';
//     const items = data.orderproducts || [];
//     const orderNotes = data.note || '-';
//     const subtotal = parseFloat(data.sub_total);
//     const serviceCharge = parseFloat(data.total_fee || 0);
//     const total = parseFloat(data.total_amount);

//     console.log(`\n=== Track Your Order! ===`);
//     console.log(`Order #${orderId}`);
//     console.log(`${orderDate}\n`);
//     console.log(`${status}`);
//     console.log(`${orderType}\n`);

//     console.log(`🧾 Order Receipt`);
//     items.forEach((item) => {
//       console.log(`${item.quantity}x ${item.item_name}`);
//       console.log(`£ ${parseFloat(item.total).toFixed(2)}`);
//     });

//     console.log(`\n📝 Order Notes`);
//     console.log(`${orderNotes}\n`);

//     console.log(`Subtotal (Tax Inclusive)`);
//     console.log(`£ ${subtotal.toFixed(2)}`);

//     console.log(`Service Charge`);
//     console.log(`£ ${serviceCharge.toFixed(2)}`);

//     console.log(`Total`);
//     console.log(`£ ${total.toFixed(2)}\n`);

//   } catch (e) {
//     console.error('Failed to parse response:', e, res.body);
//   }

//   sleep(1);
// }
