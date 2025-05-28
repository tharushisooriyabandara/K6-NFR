/*

Lets us create mock API for tetsing - Dummy API -
https://designer.mocky.io/ - use this


now, do performance test on https://run.mocky.io/v3/32acd9e1-c313-41ea-b4f6-5474eff95fb3

*/

import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let res = http.get('https://run.mocky.io/v3/32acd9e1-c313-41ea-b4f6-5474eff95fb3');
    
    check(res, {
        'is response status 200:': (r) => r.status === 200
    });
}
