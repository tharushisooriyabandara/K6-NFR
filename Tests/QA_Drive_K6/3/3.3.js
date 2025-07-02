// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

const manualUserDetails = {
  id: 1813,
  first_name: "Tharushi",
  last_name: "Sooriya",
  email: "sooriyabandaratharushi@gmail.com",
  phone: "07620814444",
  country_code: "+44",
  type: "WEBSHOP",
  status: 1,
  created_at: "2025-05-06T15:25:28.000000Z",
  updated_at: "2025-07-01T06:17:58.000000Z",
  device_platform: "mobile",
  last_active_time: "2025-07-01 11:47:58",
  last_active_device: "web",
  is_real: 1,
  // Add any other required fields here as needed
}

export default function main() {
  let response

  group(
    'page_1 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/food-menu;method=Delivery',
    function () {
      // Instead of http.get for user details, use the manual object
      let userDetails = manualUserDetails

      // The rest of the script remains, replacing references to response from GET user details with userDetails variable

      response = http.options(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/current',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(1.1)

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway5aedd6","user_id":"1810"}',
        {
          headers: {
            accept: 'application/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaXRha2Vhd2F5X2V2ZW50cyIsImV4cCI6MTg0NTg3Njg3NywiaWF0IjoxNzUxMjY4ODc3LCJzY29wZSI6InJlYWQgd3JpdGUifQ.YhSLnNboUXng9n7RFyANO7zLZNfmuUlX0-VI3Y9RUg1w829k2tgrCvKnkryV-vIOBighjdvbETLGCciYIkeoDTKLExOQ7NMBghTbJjSd0DejecM-Cy3-tiJAJuQ8OxFDKaAi3_qrzU92a6k5r8GzxMMw1HfnHBKYtDNpeHe3Fu7OZMh2sXKx-VJEKcyL9NdaobD5r7ImaVcpEtKGwp8SciPtELuT4V8QCmwwEHeU0N-sunStGK8U7g5k-ARwtqfPpeZB15wQ7lR0dlOj_fGz2VWC-bNH1TRTcpW0u9FgpbhTMRgdc6rkIw4-um3PZzSe9FEc6av38DIDcw8Jem4O5A',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.options('https://event-platform-dev.delivergate.com/save-event-json/', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,authorization,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      })
      sleep(4.6)

      // You can add more logic here using userDetails if needed

      // Since you don't want to call the user current endpoint, I removed those http.get calls
    }
  )
}
