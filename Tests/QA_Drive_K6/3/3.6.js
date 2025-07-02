// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

// export const options = { vus: 10, duration: '5m' }

// Shop location (fixed)
const shopLocation = {
  latitude: 6.8855177,
  longitude: 79.8453363,
};






export default function main() {
  let response

  group('page_2 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/food-menu', function () {
    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.get(
      'https://pos-dev.delivergate.com/api/v1/webshop/categories/webshop-brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/categories/webshop-brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/social-link?outlet_id=2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/promotion?outlet_id=2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/contact-us?outlet_id=2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    // response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
    //   headers: {
    //     accept: 'aplication/json',
    //     'access-control-allow-origin': '*',
    //     'content-type': 'application/json',
    //     'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-ch-ua-platform': '"Windows"',
    //     'x-tenant-code': 'subway',
    //   },
    // })

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://pos-dev.delivergate.com/api/v1/webshop/categories/webshop-brand/1/shop/2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/categories/webshop-brand/1/shop/2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/social-link?outlet_id=2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/promotion?outlet_id=2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/contact-us?outlet_id=2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    // 


    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(0.9)

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get('https://admin-dev.delivergate.com/api/v1/outlet/open-close/2?b=1', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/outlet/2/delivery-points?status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/outlet/open-close/2?b=1',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/outlet/2/delivery-points?status=1',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://event-platform-dev.delivergate.com/save-event-json/',
      '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subwaybe31a6","user_id":""}',
      {
        headers: {
          accept: 'aplication/json',
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
        'access-control-request-headers': 'access-control-allow-origin,authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://webshop-dev-v1-1.delivergate.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.post(
      'https://event-platform-dev.delivergate.com/save-event-json/',
      '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subwaybe31a6","user_id":""}',
      {
        headers: {
          accept: 'aplication/json',
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
        'access-control-request-headers': 'access-control-allow-origin,authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://webshop-dev-v1-1.delivergate.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'GET',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    // Example: Extract distance and duration from a response object
    const responseData = {
      "destination_addresses": [
        "7JRM+6FH, Kandy, Sri Lanka"
      ],
      "origin_addresses": [
        "Sri Lanka"
      ],
      "rows": [
        {
          "elements": [
            {
              "distance": {
                "text": "128 km",
                "value": 10000
              },
              "duration": {
                "text": "3 hours 31 mins",
                "value": 12682
              },
              "status": "OK"
            }
          ]
        }
      ],
      "status": "OK"
    };


    const userDistanceMeters = responseData.rows[0].elements[0].distance.value;

    const maxAllowedDistance = 10000; // 10 km

    if (userDistanceMeters > maxAllowedDistance) {
      console.log("Seems Like You are too far from us!");
    } else {
      console.log("Your location is within our delivery range.");
    }

    // Extract distance and duration
    const distanceText = responseData.rows[0].elements[0].distance.text; // "128 km"
    const distanceValue = responseData.rows[0].elements[0].distance.value; // 127977 (meters)
    const durationText = responseData.rows[0].elements[0].duration.text; // "3 hours 31 mins"
    const durationValue = responseData.rows[0].elements[0].duration.value; // 12682 (seconds)

    console.log(`Distance: ${distanceText} (${distanceValue} meters)`);
    console.log(`Duration: ${durationText} (${durationValue} seconds)`);
  })
}