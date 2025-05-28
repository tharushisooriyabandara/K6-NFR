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
    let response = http.get('https://run.mocky.io/v3/fa54f59e-55bb-42d4-b0f4-53bf03b7ffd0'); // returns response

    // Print logs
    console.log(`response body length ${response.body.length} for VU= ${__VU} ITERA= ${__ITER}`);

    // Perform checks
    const checkResult = check(response, {
        'is response status 200': (r) => r.status === 200,
        'body size is 44 bytes': (r) => r.body.length === 4,
        [`body size is ${response.body.length}`] : (r) => r.body.length === response.body.length,
    });

    // Update error rate metric
    errorRate.add(!checkResult); // If check fails, add true to errorRate
}
