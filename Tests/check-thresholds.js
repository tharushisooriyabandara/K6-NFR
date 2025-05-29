import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        // At least 95% of the checks should pass
        checks: ['rate>0.95']
    }
};

export default function () {
    let response = http.get('https://run.mocky.io/v3/fa54f59e-55bb-42d4-b0f4-53bf03b7ffd0');

    check(response, {
        // Custom check: response status is 200
        'status is 200': (r) => r.status === 200
    });
}
