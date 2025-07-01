import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '1m',
};

// 🟢 Set your order ID manually
const orderId = 17677;

// 🟢 Set the desired collection point name
const selectedSpotName = 'Parking lot 2'; // OR 'Underground Parking' / Parking lot 2

export default function () {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'x-tenant-code': 'subway',
  };

  // Step 1: Fetch collection points
  const res = http.get(
    'https://admin-dev.delivergate.com/api/v1/outlet/2/collection-point?status=1',
    { headers }
  );

  let spot = null;

  if (check(res, { 'Fetched collection points': (r) => r.status === 200 })) {
    try {
      const data = JSON.parse(res.body);
      spot = data.data.find((s) => s.name === selectedSpotName);

      if (!spot) {
        console.error(`❌ Spot "${selectedSpotName}" not found in response.`);
        return;
      }
    } catch (e) {
      console.error('❌ Failed to parse collection points:', e);
      return;
    }
  } else {
    console.error('❌ Failed to fetch collection points.');
    return;
  }

  // Step 2: Notify restaurant with selected spot
  const payload = JSON.stringify({
    _method: 'PUT',
    collection_point_id: spot.id,
    message: 'I have arrived',
  });

  const notifyRes = http.put(
    `https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/${orderId}/collection-point`,
    payload,
    { headers }
  );

  if (check(notifyRes, { 'Notified restaurant': (r) => r.status === 200 })) {
    console.log(`✅ Successfully notified to the restaurant`);
    console.log(`You are waiting at ${spot.name}`);
  } else {
    console.error('❌ Notification failed:', notifyRes.status);
  }

  sleep(1);
}
