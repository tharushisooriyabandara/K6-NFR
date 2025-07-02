import http from 'k6/http';
import { sleep, check } from 'k6';

// Replace this with the actual Order ID or tmpOrderID you want to track
const orderId = 17898;

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
