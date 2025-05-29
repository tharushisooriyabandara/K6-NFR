import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const url = 'https://run.mocky.io/v3/7c0ef53c-31e8-4c61-bf04-e8d88835570e';

    const headerParam = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = http.get(url, headerParam);

    // Check for HTTP 200
    check(response, {
        'Status is 200': (r) => r.status === 200,
    })

    // Parse response
    let body = JSON.parse(response.body);

    // Log outputs
    console.log(`Response body: ${JSON.stringify(body)}`);
    console.log(`Message: ${body.Message}`); // Update key if different

    // Check for expected message
    check(response, {
        'Is message success: ': (r) => JSON.parse(r.body).Message === "Data fetched successfully",
    });
}