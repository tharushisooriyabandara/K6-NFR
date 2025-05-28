import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let response = http.get('https://run.mocky.io/v3/fa54f59e-55bb-42d4-b0f4-53bf03b7ffd0');

    console.log(`Response body length: ${response.body.length}`);

    check(response, {
        'status is 200'                   : (r) => r.status === 200,
        'body is not empty'               : (r) => r.body.length > 0,
        //'content includes "message"'      : (r) => r.body.includes('message'),
        [`body size is ${response.body.length}`] : (r) => r.body.length === response.body.length,
    });
}
