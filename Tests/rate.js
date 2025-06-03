import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Define custom metrics
let api1Duration = new Trend('api1_duration');
let api2Duration = new Trend('api2_duration');
let api3Duration = new Trend('api3_duration');

let api1Errors = new Rate('api1_errors');
let api2Errors = new Rate('api2_errors');
let api3Errors = new Rate('api3_errors');

// Test options
export let options = {
    thresholds: {
        api1_errors: ['rate < 0.1'],
        api2_errors: ['rate < 0.1'],
        api3_errors: ['rate < 0.1'],
    },
};

export default function () {
    // API 1
    let res1 = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods');
    api1Duration.add(res1.timings.duration);
    let check1 = check(res1, {
        'API 1: status is 200': (r) => r.status === 200,
    });
    api1Errors.add(!check1);

    // API 2
    let res2 = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/categories');
    api2Duration.add(res2.timings.duration);
    let check2 = check(res2, {
        'API 2: status is 200': (r) => r.status === 200,
    });
    api2Errors.add(!check2);

    // API 3
    let res3 = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/some-other-endpoint');
    api3Duration.add(res3.timings.duration);
    let check3 = check(res3, {
        'API 3: status is 200': (r) => r.status === 200,
    });
    api3Errors.add(!check3);

    // Log VU and iteration info
    console.log(`VU: ${__VU}, ITER: ${__ITER}`);
}
