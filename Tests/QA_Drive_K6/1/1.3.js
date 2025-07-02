// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  let response

  group(
    'page_2 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/food-menu;method=Collection',
    function () {
      response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(1.2)

      response = http.post(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/last-activity',
        '{"device":"web","shop_id":2}',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.options(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/last-activity',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'POST',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(0.6)

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/customer/main-menu/68/webshop-brand/1/purchased-items?type=PURCHASED&active=1',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.options(
        'https://pos-dev.delivergate.com/api/v1/customer/main-menu/68/webshop-brand/1/purchased-items?type=PURCHASED&active=1',
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
      sleep(1.7)

      response = http.get(
        'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/shop/2/shop-fee',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/check-first-order-offer-eligibility?shop_id=2&webshop_brand_id=1&device_platform=web',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.options(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/check-first-order-offer-eligibility?shop_id=2&webshop_brand_id=1&device_platform=web',
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

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://admin-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/basic-details',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(0.5)

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subway839bcb","user_id":"1809"}',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaXRha2Vhd2F5X2V2ZW50cyIsImV4cCI6MTg0NDY2MjQxOSwiaWF0IjoxNzUwMDU0NDE5LCJzY29wZSI6InJlYWQgd3JpdGUifQ.Xm53ZMI4_-fa8g0k19kCkjoaIaxN_W1TeEEY7jawr3N92d297iV8fB7_IbG6KlJNYnGfarClvNSF7Z1jSzrO2fu37p52Mi7pHVwPp980BDZulQpoDt_-5D-CsF4vMxjo9X57NLQpmNSGtiuPaHMm2h8TcxBmmP7x3NHc4axSsqmyEq4kTWKVie564OnRmXbw9wrcR7bqgOLyM0a4AiCp2RM7THMBbxvakJbNQbx7oL_8uo42SExkrHLqfjRClbQronAb7hgtfXLBi5rYNvJzCcERVQEX5uHvLfxsPll6uKteQo5xWZsCJMy0Uz90U7L6tXnibmZlrFFgTO2TpFW_dw',
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
      sleep(0.5)

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWFiN2NhNDdhMjdmOTY1OTA1M2U5YjI2OTExMTlkNDQ2ZWVkYWEzNjU0MWRlZDAxNWM2Y2U2MDcwNWI2ZWY2YmRlYzFiY2MyYmJiZmRlNzEiLCJpYXQiOjE3NTAxNDk5ODUuMDM5NjEzLCJuYmYiOjE3NTAxNDk5ODUuMDM5NjE2LCJleHAiOjE3ODE2ODU5ODUuMDE4MTU2LCJzdWIiOiIxODA5Iiwic2NvcGVzIjpbXX0.IB4IXW2l3tUF1d1SJ0vXomhdb_iJzD89R2iHxD913sNwPJg-ZkSZWV3ahBo5W1avnbsJdeZ2sGmWa6vlJ_UD0YObxK_EbpBJlietddh0YNQn-L7T2ksyD6slbjPa7cXMuh3UOCRNFjqY46pD9t6YSuEW4DqdD0F1Aa67Pm-oc9NJBeJ6aRG40A6B6L9DAtclQQ3S1MBJD4jb7A1tK_sGyeE1FBUJNsq5ZfKnXYw0SRg-AvAbXOP_d1mrUHenSr9WvQnhQ2iUcJc5TgsJnohGuL51zNk7-O4XkvMS--xwCGyywup8E67yYKkb8c0sMuaVYERLVBEl5tliD1tHkd3ZNrgJkMjMWFO5q4S8HrBbtgdbhJt8KTQZlThj5Gffs7K0KEsYrpGx_oVoEBJ3Dyb7Kyn4g6m_uJe-mkyMbeKnt0jS46wPBdLfIvV1TeGYa3rce70LtN8o1Kzv_HAL5eDIqFAoXp2kerjNriD90w_vtWWuKAhHB3R7h15y4BbUJMWdyFyatqTuwwN8Bn5-wrMJJ42vLrHJMIA6COA3q0D8JutzLTxUnIGPIJzdeNrIU07f0JLveBsJw8zHoT287anVHkMS2ZVW-GB_xZEv_H1ovdNIxs2ts5TTbNANdnmoMv8vROOFoky2JR3FM9N4Kxn3KmtmDPTHadV0AzQWvLsWipk',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )
    }
  )
}