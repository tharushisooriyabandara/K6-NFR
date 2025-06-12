import { sleep, group } from 'k6'
import http from 'k6/http'
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

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
        { target: 1, duration: '10s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  group('page_1 - https://webshop-dev-v1-1.delivergate.com/', function () {
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
    sleep(0.6)
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

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/collection-order.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/delivery-order.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/phone-order.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.5)

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

    vars['title1'] = jsonpath.query(response.json(), '$.data.products[0].title')[0]

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

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/whatsapp.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/facebook.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/icon/instagram.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/icons/arrow-down.icon.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/misc/payment-methods.misc.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://webshop-dev-v1-1.delivergate.com/assets/images/RewardLine1.png', {
      headers: {
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://webshop-dev-v1-1.delivergate.com/assets/images/RewardLine2.png', {
      headers: {
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://webshop-dev-v1-1.delivergate.com/assets/images/Rewardcoin.png', {
      headers: {
        'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/misc/google-review.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
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
    sleep(0.5)

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/logo/apple-store.logo.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/svg/logo/google-play.logo.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(2.2)
  })

  group(
    'page_3 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/food-menu;method=Collection',
    function () {
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
        'https://pos-dev.delivergate.com/api/v1/webshop/categories/webshop-brand/1/shop/2',
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
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/categories/webshop-brand/1/shop/2',
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

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
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
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/categories/webshop-brand/1/shop/2',
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
        'https://user-dev.delivergate.com/api/v1/webshop_customer/current',
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

      response = http.get('https://webshop-dev-v1-1.delivergate.com/assets/icons/searchIcon.svg', {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get(
        'https://webshop-dev-v1-1.delivergate.com/assets/icons/collection-order.svg',
        {
          headers: {
            'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://webshop-dev-v1-1.delivergate.com/assets/icons/delivery-order.svg',
        {
          headers: {
            'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get('https://webshop-dev-v1-1.delivergate.com/assets/icons/phone-order.svg', {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      sleep(2.5)

      response = http.get(
        'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
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
            'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
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
      sleep(0.5)

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway9f092f","user_id":""}',
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
          'access-control-request-headers':
            'access-control-allow-origin,authorization,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      })

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      sleep(0.7)

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway9f092f","user_id":""}',
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
      sleep(14.1)
    }
  )

  group('page_4 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/checkout', function () {
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

    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-platform',
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
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
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
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-platform',
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

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/icons/payment-methods.misc.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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

    response = http.get(
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
      'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/79/submenu/times/webshop-brand/1/shop/2',
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
    sleep(5.8)

    response = http.post(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
      `{"getOrder":{"shipping_method":"COLLECTION","shop_id":2,"platform_id":5,"sub_total":7693.000000000001,"delivery_date_time":"2025-06-11T17:47:30+05:30","delivery_distance":0,"vouchers":[],"total_amount":7918.000000000001,"discount":0,"discount_type":"","campaign_code":"","note":"make more crispy","delivery_cost":0,"total_tax":0,"orderproducts":[{"temp_id":"Item_id_263_1265","item_id":263,"quantity":7,"price_per_item":"8.99","item_name":"${vars['title1']}","tax":"0.00","is_sale":false,"is_bogo":false,"bogo_buy_quantity":0,"bogo_get_quantity":0,"sale_price":null,"original_price":null,"discount_amount":0,"total":10.99,"modifierDetails":[{"modifier_main":"Select Pizza Size","modifier_main_item":195,"modifier_item":{"id":1265,"entity_id":232,"delivery_platform_id":5,"external_item_id":"232","plu":"232","price":"2.00","item_name":"MED 12\\" (8 slices)","allergies":"a:0:{}","available":1,"available_from":null,"modifier_list":[]},"modifier_item_name":"MED 12\\" (8 slices)","modifiers":[]}],"item_category_id":1}],"customer":{"first_name":"Guest","last_name":"Tharushi","location_id":"501","lat_lng":null,"email":"sooriyabandaratharushi@gmail.com","address":null,"flat_no":null,"contact_number":"+44762881444","phone":"762881444","country_code":"+44"},"receiver":{"first_name":"Guest","last_name":"Tharushi","email":"sooriyabandaratharushi@gmail.com","address_line_1":null,"address_line_2":null,"phone":"762881444","country_code":"+44"},"order_shop_fees":[{"shop_fee_id":1,"amount":225}],"total_fee":225},"device_platform":"web","rwg_token":"","saveType":"SAVE_AND_FORWORD","paymentMethod":"cash","paymentType":"PAY_ON_COLLECTION","save_card":0,"subscribe_to_promotion_emails":0}`,
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/create-temp-order',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'POST',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(1.1)

    response = http.put(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
      '{"tmpOrderID":16789,"paymentStatus":"success","paymentType":"PAY_ON_COLLECTION","rwg_token":""}',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/complete/tmp-order',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'access-control-allow-origin,content-type,x-tenant-code',
          'access-control-request-method': 'PUT',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )
    sleep(4.3)

    response = http.options('https://event-platform-dev.delivergate.com/save-event-json/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'access-control-allow-origin,authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://webshop-dev-v1-1.delivergate.com',
        'sec-fetch-mode': 'cors',
      },
    })
  })

  group('page_5 - https://webshop-dev-v1-1.delivergate.com/confirm-order/16789', function () {
    response = http.post(
      'https://event-platform-dev.delivergate.com/save-event-json/',
      '{"event_type":"order_placed","campaign_id":"","path":"checkout_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway9f092f","user_id":""}',
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

    response = http.get(
      'https://webshop-dev-v1-1.delivergate.com/assets/icons/google-label.misc.svg',
      {
        headers: {
          'sec-ch-ua': '"Microsoft Edge";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.7)

    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/16789/main-menu/79',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/16789/main-menu/79',
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