// Write in Java Script
// Call google.com - https://www.google.com/
// When 1000s of users call google.com, what will happen
// Call means get - http.het

import http from 'k6/http'

// main function where user will be spread
export default function () {
    // VU code, gets called again and again bu VU
    http.get('https://www.google.com/')
    
}

// lets us execute test with 1 virtual user

// command not found - becuae env avriable not set, so restart visual studio or machine

// press tab to auto fill values

// test successfully executed