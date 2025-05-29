import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const url = 'https://run.mocky.io/v3/7c0ef53c-31e8-4c61-bf04-e8d88835570e';

    const headerParam = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.get(url, headerParam);

    check(response, {
        'Status is 200': (r) => r.status === 200,
    });

    let body = JSON.parse(response.body);

    console.log(`Response body: ${JSON.stringify(body)}`);
    console.log(`Message: ${body.Message}`);

    check(response, {
        'Is message success: ': (r) => JSON.parse(r.body).Message === "Data Fetched Successfully",
    });
}
