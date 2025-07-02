import http from 'k6/http';
import { sleep, check } from 'k6';
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js';

export const options = {
  vus: 1,
  duration: '1m',
};

export default function () {
//   // Step 1: Check Email
//   const emailRes = http.post(
//     'https://user-dev.delivergate.com/api/v1/webshop_customer/check-email',
//     JSON.stringify({ email: 'sooriyabandaratharushi@gmail.com', account_brand: '1' }),
//     {
//       headers: {
//         accept: 'application/json',
//         'content-type': 'application/json',
//         'x-tenant-code': 'subway',
//       },
//     }
//   );

//   check(emailRes, {
//     'email check successful': (res) => res.status === 200,
//   });

  // Step 2: Login Request
  const loginRes = http.post(
    'https://user-dev.delivergate.com/api/v1/webshop_customer/login',
    JSON.stringify({
      username: 'sooriyabandaratharushi@gmail.com',
      password: '109062961449707363647',
      grant_type: 'password',
      client_id: '4',
      client_secret: 'wi1ciuewRqbIHgoEQMizPUyx0dYnBknDnojLWXGa',
      scope: '',
      account_brand: '1',
      tok: '...', // use a valid token or omit if not required
      s: 'google',
    }),
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
}
