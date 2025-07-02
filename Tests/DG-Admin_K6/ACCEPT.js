// Creator: Grafana k6 Browser Recorder 1.0.8

import http from 'k6/http';
import { check } from 'k6';

// export const options = { vus: 1, duration: '1m' };

// List your order codes here
const orderCodes = [
  'DZ-01-020725-017990-SYGx',
  // Add more order codes as needed
];

const AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjE2OTMyODU4OGFkMmQ1YTViNDI2ZGUxYWUyN2JmYTY5NTU0NmQxMjBlYTNjNDU4MGQ0YWJlOTI2MDM4YzJjMGQ3YTRhNDcwODU3ZWYxNjciLCJpYXQiOjE3NTE0Mjg3MzguNDgxNDY0LCJuYmYiOjE3NTE0Mjg3MzguNDgxNDY3LCJleHAiOjE5MDkxOTUxMzguNDA4MDQ1LCJzdWIiOiI0NiIsInNjb3BlcyI6WyIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCIxMCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIxNiIsIjE3IiwiMTgiXX0.qREN3z1xWYs8aqK359-qdLMNqPoNlhaxaQVPEZt30xnjAOwWjdMNiGt5dgeuUO52D6ZdYZEuZ2B9siBGODnKJ0fh7NBp_pNFkkhmGHKXRjQL396H1KxJMI0BxhXrcs7CBwVYjlmxGudIzHbzLxK2Pzqf4acOEEexmxTLZh2Vv89U_-inCxeMX5jtKUwD2aSqmbWS8_tfuZ8vIoIIvj3zte2D6bsZt0liPM7Y5fkUFuojoy03gXYKHRoMkBjonu2RRpcdqiCXG8Ww72Vt8aVnlcdm6vfTjQZ8q49DShFXlpOyGaeZpJygo5747OdTJGiR8QbeSiljZThtle-VP2pHSL8tEj5TEYvUZo7WMh8izVzv9LNKOk7gO5OdttNDRyOZjaWhZvCTYfduCm50CuAmgewNsLhMQhWe6coHvTV5QBL7UMZjOuPeeIYX3J58R_2RGnB71pNRF9FmltUK96pRyXdaa_vYiFt6OXcXfNSxSNWTOnEANy5D1w6nxO6OgfDFI_QPG-0riU8YXxvblYOf4-UXyPPuHEYVn6NKEEDfZuGjVCPiIyP_7VGuDkI_vOpvaab1QGudDH_dP1_GssSFLN90-tnjxii7TaXdK_ToUWHvMWn8k4TA2PH1632zWcDg45sH7RrKOe9dEQGpzbCMjbcxMwrBBlgWCCHXD9FCkwk';
          

export default function () {
  orderCodes.forEach(orderCode => {
    const url = `https://platform-dev.delivergate.com/api/v1/accept-order/${orderCode}`;
    const payload = '["accepted"]';
    const headers = {
      accept: 'application/json',
      'access-control-allow-origin': '*',
      authorization: AUTH_TOKEN,
      'content-type': 'application/json',
      'x-tenant-code': 'subway',
    };

    const res = http.post(url, payload, { headers });
    check(res, {
      'Order accepted - status 200': (r) => r.status === 200,
    });
    if (res.status === 200) {
      console.log(`Order ${orderCode} accepted successfully.`);
    } else {
      console.error(`Failed to accept order ${orderCode}. Status: ${res.status} Body: ${res.body}`);
    }
  });
}
