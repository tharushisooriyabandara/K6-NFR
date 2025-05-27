// Write in Java Script
// Call google.com - https://www.google.com/
// When 1000s of users call google.com, what will happen
// Call means get - http.het

import http from 'k6/http'

// main function where user will be spread
export default function () {
    http.get('https://www.google.com/')
    
}

// lets us execute test with 1 virtual user