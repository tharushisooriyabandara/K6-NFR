// ------------------------------------------
// 1. INIT PHASE
// - This runs once per VU (Virtual User) instance
// - Initialize variables, options (VUs, duration, thresholds), data loading, etc.
// ------------------------------------------
var counter = 1;

// ------------------------------------------
// 2. SETUP PHASE
// - Runs only once before the load test starts
// - Used for preparing test data, tokens, etc.
// ------------------------------------------
export function setup() {
    console.log(`Inside Setup - counter = ${counter}`);
}

// ------------------------------------------
// 3. DEFAULT FUNCTION (VU Code)
// - The main logic run by each virtual user
// - Executes repeatedly during the test duration
// ------------------------------------------
import { sleep } from 'k6';

export default function () {
    console.log(`Inside Default - counter = ${counter} | VU = ${__VU} | ITER = ${__ITER}`);
    counter = counter + 1;
    sleep(1); // just to slow down iteration slightly
}

// ------------------------------------------
// 4. TEARDOWN PHASE
// - Called once after the test finishes
// - Used to clean up, report, or reset systems
// ------------------------------------------
export function teardown() {
    console.log(`Inside Teardown - counter = ${counter}`);
}
