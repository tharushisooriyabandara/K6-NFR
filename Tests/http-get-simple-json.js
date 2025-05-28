import http from 'k6/http';
import { check } from 'k6';

export default function () {
    var url = 'https://run.mocky.io/v3/7c0ef53c-31e8-4c61-bf04-e8d88835570e';

    var headerParam = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = http.get(url, headerParam);

    check(response, {
        'is status 200': (r) => r.status === 200,
    })

    let body = JSON.parse(response.body);

    // print
    console.log(`response body is ${JSON.stringify(body)}`)
    console.log(`message is: ${body.Message}`); // Change to body.data.message if needed
}
