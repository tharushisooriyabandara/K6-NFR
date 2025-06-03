import http from 'k6/http';

export default function () {
    // Step 1: Make HTTP request and store response
    let response = http.get('https://your-api-endpoint.com/orders'); // Replace with your real API

    // Step 2: Parse JSON body
    let body = JSON.parse(response.body);

    // Step 3: Loop through and print order details
    body.forEach(order => {
        console.log(`Customer name is: ${order.customer.name}`);
        console.log(`Order status: ${order.status}`);
        console.log(`Total amount: ${order.totalAmount}`);

        order.items.forEach(item => {
            console.log(`-- Item: ${item.productName}, Quantity: ${item.quantity}, Price: ${item.price}`);
        });

        console.log('---------------------');
    });
}
