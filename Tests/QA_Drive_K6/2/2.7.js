// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  let response

  group('page_2 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/checkout', function () {
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
    response = http.get(
      'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/webshop-platform',
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
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
    sleep(0.7)
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tenant-code': 'subway',
      },
    })
    response = http.get(
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
      'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17681/main-menu/68',
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
    sleep(0.5)
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
    sleep(0.6)
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
    sleep(2)
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
    sleep(0.5)
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
    sleep(0.5)
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
  })
}