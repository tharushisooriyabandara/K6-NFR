// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  let response

  group('page_1 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/checkout', function () {
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
  })

  // Automatically added sleep
  sleep(1)
}