import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://webshop-dev-v1-1.delivergate.com/');

  check(res, {
    'Homepage loaded successfully': (r) => r.status === 200,
  });
}
