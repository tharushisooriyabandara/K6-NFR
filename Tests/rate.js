import http from 'k6/http';
import { check } from 'k6';
// Import Rate
import { Rate } from 'k6/metrics';

// Export variable that we will use in the test
export let errorRate = new Rate('errors');

// Define options
export let options = {
    thresholds: {
        errors: ['rate < 0.1'], // i.e., less than 10% errors allowed
    },
};

export default function () {
    let response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods');

    // Print logs
    console.log(`response body length ${response.body.length} for VU= ${__VU} ITERA= ${__ITER}`);

    // Perform checks
    const checkResult = check(response, {
        'is response status 200': (r) => r.status === 200,
        // 'body size is 11 bytes': (r) => r.body.length === 25,
        [`body size is ${response.body.length}`] : (r) => r.body.length === response.body.length,
    });

    // Update error rate metric
    errorRate.add(!checkResult); // If check fails, add true to errorRate
    console.log(`Status code: ${response.status}`);

    if (response.status !== 200) {
    console.log(`Failed request: Status ${response.status}, Body: ${response.body}`);
}

}
