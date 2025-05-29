import http from 'k6/http'

export default function () {
    let response = http.get('https://run.mocky.io/v3/f04c0fd5-0cba-4a64-949c-13490552fc32');

    let body = JSON.parse(response.body);

    // Loop through the top-level array
    body.forEach(order => {
        console.log(`Customer name is: ${order.customer.name}`);
        console.log(`Order status: ${order.status}`);
        console.log(`Total amount: ${order.totalAmount}`);

        // Optional: Print item details
        order.items.forEach(item => {
            console.log(`-- Item: ${item.productName}, Quantity: ${item.quantity}, Price: ${item.price}`);
        });

        console.log('---------------------');
    });
}
