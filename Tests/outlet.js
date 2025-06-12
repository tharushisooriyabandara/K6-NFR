import http from 'k6/http';
import { check } from 'k6';

// Outlet IDs
const OUTLETS = {
  bambalapitiya: 2,
  kollupitiya: 3,
};

export default function () {
  // Change this variable to test different outlets
  const outletName = 'bambalapitiya';
  const outletId = OUTLETS[outletName];

  // Step 1: Go to outlet page using outlet id in the URL
  let outletPage = http.get(`https://webshop-dev-v1-1.delivergate.com/outlet/${outletId}`);
  if (outletPage.status === 200) {
    console.log(`Outlet page for id ${outletId} loaded successfully`);
  } else {
    console.log(`Outlet page for id ${outletId} failed to load. Status:`, outletPage.status);
  }
  check(outletPage, {
    'Outlet page loaded (status 200)': (r) => r.status === 200,
  });

  // Step 2: Check API calls after outlet select
  let promotion = http.get(`https://webshop-dev-v1-1.delivergate.com/promotion?outlet_id=${outletId}`);
  check(promotion, {
    'Promotion API success': (r) => r.status === 200,
  });

  let contactUs = http.get(`https://webshop-dev-v1-1.delivergate.com/contact-us?outlet_id=${outletId}`);
  check(contactUs, {
    'Contact Us API success': (r) => r.status === 200,
  });

  let orderMethods = http.get('https://webshop-dev-v1-1.delivergate.com/order-methods');
  check(orderMethods, {
    'Order Methods API success': (r) => r.status === 200,
  });
}