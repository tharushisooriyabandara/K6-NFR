// POST request

// https://run.mocky.io/v3/144ffa6a-4bb4-44c9-9223-41260740a923

import http from 'k6/http';

export default function () {
    var url = 'https://run.mocky.io/v3/144ffa6a-4bb4-44c9-9223-41260740a923';

    var payload = JSON.stringify({
        email: "abc@gmail.com",
        password: "abcdefg"
    });

    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // POST request: URL, Payload (body), Params (headers)
    let response = http.post(url, payload, params);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
}
