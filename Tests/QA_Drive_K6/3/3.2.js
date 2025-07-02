// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 1, duration: '1m' }

export default function main() {
  let response

  group(
    'page_2 - https://webshop-dev-v1-1.delivergate.com/Bambalapitiya/food-menu;method=Delivery',
    function () {
      response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/mobileapp', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
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
        'https://user-dev.delivergate.com/api/v1/webshop_customer/address',
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

      response = http.options(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://user-dev.delivergate.com/api/v1/webshop_customer/address',
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

      response = http.options(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://user-dev.delivergate.com/api/v1/webshop_customer/address',
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

      response = http.options(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://user-dev.delivergate.com/api/v1/webshop_customer/address',
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

      response = http.options(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
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
      sleep(1.3)

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get(
        'https://platform-dev.delivergate.com/api/v1/webshop/order-service/order/17715/main-menu/68',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.post(
        'https://user-dev.delivergate.com/api/v1/webshop_customer/last-activity',
        '{"device":"web","shop_id":2}',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/customer/main-menu/68/webshop-brand/1/purchased-items?type=PURCHASED&active=1',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
      sleep(0.5)

      response = http.get(
        'https://pos-dev.delivergate.com/api/v1/webshop/main-menu/68/submenu/times/webshop-brand/1/shop/2',
        {
          headers: {
            accept: 'aplication/json',
            'access-control-allow-origin': '*',
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
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
              'access-control-allow-origin,authorization,content-type,x-tenant-code',
            'access-control-request-method': 'GET',
            origin: 'https://webshop-dev-v1-1.delivergate.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/address', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'x-tenant-code': 'subway',
        },
      })

      response = http.get('https://user-dev.delivergate.com/api/v1/webshop_customer/current', {
        headers: {
          accept: 'aplication/json',
          'access-control-allow-origin': '*',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-tenant-code': 'subway',
          },
        }
      )

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subwayc784c7","user_id":"1810"}',
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
          'access-control-request-headers':
            'access-control-allow-origin,authorization,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://webshop-dev-v1-1.delivergate.com',
          'sec-fetch-mode': 'cors',
        },
      })

      response = http.post(
        'https://event-platform-dev.delivergate.com/save-event-json/',
        '{"event_type":"menu_viewed","campaign_id":"","path":"food_menu_page","outlet_id":"2","tenant":"subway","platform":"WEB","brand_id":"1","session_id":"subwayc784c7","user_id":"1810"}',
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
          'access-control-request-headers':
            'access-control-allow-origin,authorization,content-type',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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
            authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWI2MjI2Mjg5NWM4MGFjN2NiNmYxODI0NWFkOTVmNTcyMGQ0MWI1YjQ2MDgzMGUyMDNiZjljNzAwYTE5ZDNlNTI3MDBhNzYzZjVhMTBjZDciLCJpYXQiOjE3NTEyNzU1NzAuMTMzMzgsIm5iZiI6MTc1MTI3NTU3MC4xMzMzODQsImV4cCI6MTc4MjgxMTU3MC4xMDg5MjQsInN1YiI6IjE4MTAiLCJzY29wZXMiOltdfQ.KqvLCeT7Wij2xgpc9E9CF3S4_koyPYpiCU1cYAd6yspx9vsjy6BtwSo4GmbsgCPZkYMIJSt390pMyk7RA-9FKSTWLHfhRH6kmxMdBUfprpGlU96_YIRHYPE42SyGIpmWKisDVifiSpS7z2ffXk8CWG28OtG__LTu_4hlOWPGogmbiXnX3VKoHawULTqP5f1AoKD2na94r3f1cl2XDttNKlPlP9gpsLqsB1yjyhbWu-VcYhvgyR69HOB_ln-caSieXhbnWp45uuMe7b6-HpMXFIgZ8nRvexYwpG3wu2w9SUl2SBvKSYcpIfsRy5LL5q9kLNA6wEg3zLtDTbZw0iqrdLN5DHdXacASXCG5fjcr76DMe79a057vQ2At2zDYfOrota7GQ4yflD1EHRczgMtOGFI2HzZCkRbq3Nk-RCm0w42ajR1L0a9poubpcL6Nmmw_C7gwgS4kl94uyPO0iEBcZcCscUnPFuaOku9kvYXfxlVo3oivqjpLIKG3HA7QTKbVZGV18nk7OHyO0R4HFPESP39IGYhAHfwRhlTIVE7fqd3868sjP3dpNW2eeGSJ-IUbezNzMdnPWz_adTKeZ7YSqw0cK7ydUyrH-jblmC8U8FlQcRGqyHwPaJKQYqj-Ww6IAnIED8H40nQJfNtEw4tJ86n5LpiGQkhET6qPYdmxeG8',
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