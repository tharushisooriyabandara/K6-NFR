import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

// Custom metric
let myTrend = new Trend('custom_duration');

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // ramp-up to 10 VUs
    { duration: '1m', target: 10 },  // hold at 10 VUs
    { duration: '30s', target: 0 },  // ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be < 500ms
  }
};

export default function () {
  let response = http.get('https://run.mocky.io/v3/f04c0fd5-0cba-4a64-949c-13490552fc32');
  myTrend.add(res.timings.duration);
  sleep(1);
}
