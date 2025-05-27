import http from 'k6/http'

// rampup nd ramp down users
export let options = {
    stages: {
        {duration: '10s', target: 5}, // 5 users for 10 seconds
        {duration}   
    }
}

// main function, VU will call endpoint
export default function () {
    http.get('https://www.google.com')
}