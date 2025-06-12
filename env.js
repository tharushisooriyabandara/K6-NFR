/*
  Declare environment variables for different environments: INT (Integration), DEV (Development), and PROD (Production)

  Moodle is hosted locally:
  - INT:  http://127.0.0.1:83
  - DEV:  http://127.0.0.1:84
  - PROD: http://www.moodle.com
*/

var SERVER_INT_URL  = "http://127.0.0.1:83/webservice/rest/server.php";
var SERVER_DEV_URL  = "http://127.0.0.1:84/webservice/rest/server.php";
var SERVER_PROD_URL = "http://www.moodle.com/webservice/rest/server.php";

// Export environment objects
export let intEnvironment = {
  SERVER_ENDPOINT: SERVER_INT_URL,
};

export let devEnvironment = {
  SERVER_ENDPOINT: SERVER_DEV_URL,
};

export let prodEnvironment = {
  SERVER_ENDPOINT: SERVER_PROD_URL,
};

// Example token (can move to shell script if dynamic)
export let token = "585a5e34abe199537fec2640b8252ef7";

// Optional environment labels
export let int = "int";
export let dev = "dev";
export let prod = "prod";
