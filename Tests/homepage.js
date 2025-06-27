import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  cloud: {
    distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
    apm: [],
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 1, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_1 - https://webshop-dev-v1-1.delivergate.com/', function () {
    response = http.get('https://webshop-dev-v1-1.delivergate.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.9)

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/theme', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/theme',
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

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/basicinfo', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/basicinfo',
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

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/homepage', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.get('https://admin-dev.delivergate.com/api/v1/outlet/default-shop?b=1', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/homepage',
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

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/footer', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/favicon', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/outlet/default-shop?b=1',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/footer',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/favicon',
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

    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
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

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
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
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
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
    sleep(1)

    response = http.post(
      'https://event-platform-dev.delivergate.com/save-event-json/',
      '{"event_type":"web_opened","campaign_id":"","path":"layout_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway95b908","user_id":""}',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaXRha2Vhd2F5X2V2ZW50cyIsImV4cCI6MTg0MDc5OTE1MiwiaWF0IjoxNzQ2MTkxMTUyLCJzY29wZSI6InJlYWQgd3JpdGUifQ.DhVNg4uxDcW0XQFrofieR-8rDpah9IHxRtrD5H2RN0x80ppV6o3OCdyrXV6QH1TlhiGzbLCHCnmEmMckxVEkNFFfgLv5hBWTwpAhnB8NWpsSFwqca6vLiXDnQNjN7XUVB8iktTuAkZWW5Tl_j2GgwCWxSHvBMRYqlTy3QzTiZEtKOmU3ofP6KkZWFlljtG8Ju7xVGVc3OTJPpJjgeunWSKvEovcfn4u-qURL1vkYtvnKWsMoyZ57Fx2QVSV7Xyzf2YHUkyc3cy_Be9OVGTeLA1YPtpMpISYlk2J-KIJ5OyJ4_NVKUsJnx_JqtqGFTlosJcTTbFJVaEuULq5C1Masuw',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-status',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-status',
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

    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
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
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/social-link?outlet_id=2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )

    response = http.options(
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
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

    response = http.get(
      'https://reservation-dev.delivergate.com/api/v1/offers?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
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

    response = http.options(
      'https://reservation-dev.delivergate.com/api/v1/offers?shop_id=2&status=1',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

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
    sleep(0.5)

    response = http.get('https://admin-dev.delivergate.com/api/v1/outlet/open-close/2?b=1', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

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
    sleep(2.8)

    response = http.get('https://admin-dev.delivergate.com/api/v1/outlet/2?b=1', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })

    response = http.options('https://admin-dev.delivergate.com/api/v1/outlet/2?b=1', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'access-control-allow-origin,content-type,x-tenant-code',
        'access-control-request-method': 'GET',
        origin: 'https://webshop-dev-v1-1.delivergate.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(0.5)
  })

  group('page_2 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya', function () {
    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-status',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
    sleep(1.4)
    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-status',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.options(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-status',
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
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.options(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.options(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
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
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.options(
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
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
      'https://admin-dev.delivergate.com/api/v1/outlet/delivery-method?webshop_brand_id=1',
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
    response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      }
    )
    response = http.get(
      'https://reservation-dev.delivergate.com/api/v1/offers?shop_id=2&status=1',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
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
    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
      {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
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
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
    response = http.options(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/products/most-sell/brand/1/shop/2',
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
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/homepage/main-section',
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
      'https://reservation-dev.delivergate.com/api/v1/reservation-types?shop_id=2&status=1',
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
    response = http.options(
      'https://reservation-dev.delivergate.com/api/v1/offers?shop_id=2&status=1',
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
    response = http.get('https://admin-dev.delivergate.com/api/v1/outlet/open-close/2?b=1', {
      headers: {
        accept: 'aplication/json',
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
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
  })
}