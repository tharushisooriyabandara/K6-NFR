/*

Lets us create mock API for tetsing - Dummy API -
https://designer.mocky.io/ - use this


now, do performance test on https://run.mocky.io/v3/32acd9e1-c313-41ea-b4f6-5474eff95fb3

*/

import http from 'k6/http';
import { check } from 'k6';

export default function () {
    // Send GET request to the mock API
    let response = http.get('https://run.mocky.io/v3/fa54f59e-55bb-42d4-b0f4-53bf03b7ffd0');

    // Log the response body length, current Virtual User, and Iteration
    console.log(`response body length ${response.body.length} for VU= ${__VU} ITER = ${__ITER}`);

    // Perform checks (assertions that don't stop the test)
    check(response, {
        'is response status 200:'  : (r) => r.status === 200,
        'body size is 43 bytes:'   : (r) => r.body.length === 44,
    });
}


