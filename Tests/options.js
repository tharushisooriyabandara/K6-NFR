// Write in JavaScript
// Objective: Call https://www.google.com/
// Scenario: Simulate what happens when thousands of users access google.com

import http from 'k6/http'

export let options = {
    // Declare test configuration
    vus: 10,              // Number of virtual users
    duration: '10s'       // Duration of the test
}

// Main function: This will be executed repeatedly by each VU
export default function () {
    http.get('https://www.google.com/')
}
