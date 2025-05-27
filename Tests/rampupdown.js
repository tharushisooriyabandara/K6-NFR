import http from 'k6/http';

// Ramp-up and Ramp-down users
export let options = {
    stages: [
        { duration: '10s', target: 5 }, // Ramp up to 5 users over 10 seconds
        { duration: '20s', target: 3 }  // Ramp down to 3 users over 20 seconds
    ]
};

// Main function, VUs will call this endpoint repeatedly
export default function () {
    http.get('https://www.google.com');
}
