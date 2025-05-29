import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let response = http.get('https://run.mocky.io/v3/fa54f59e-55bb-42d4-b0f4-53bf03b7ffd0');

    // Check response status is 200
    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    // Optional log
    console.log(`Response body: ${response.body}`);
}
