import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Trend, Counter } from 'k6/metrics';

// Metrics
const pageLoadTime = new Trend('page_load_time');
const loginApiTime = new Trend('login_api_time');
const loginFailures = new Counter('login_failures');

export const options = {
  vus: 1,
  duration: '5s',
};

export default function () {
  group('Load Login Page', function () {
    const reqLoginPage = http.get('https://my.aronium.com/login');
    pageLoadTime.add(reqLoginPage.timings.duration);

    const loginPageSuccess = check(reqLoginPage, {
      'Login page loaded (status 200)': (r) => r.status === 200,
    });

    if (loginPageSuccess) {
      console.log('✅ Login page loaded successfully.');
    } else {
      console.error(`❌ Login page load failed. Status: ${reqLoginPage.status}`);
    }
  });

  sleep(1);

  group('Login API', function () {
    const loginPayload = JSON.stringify({
      email: 'sooriyabandaratharushi99@gmail.com',
      password: 'admin1234',
      //recaptchaResponse: ''
      recaptchaResponse: '03AFcWeA7tOZkiIn7nowv7YLHDDpj6gkNSNcNdedApr-eLvBleUtFg7tPRdfjz0al5uWrHOBTikptrg7hamJbYqrWbkYyqG5tZgM7xvwVd8Xp7D_XvCEyR8xVNoZGBXC7EwPnHdr_djda4N0B35t0TR33OIx9RSF6tFlVy0AOMSOYyMRZOYAaZTYQmGUiV2bzL1sGm0rYQwdAMd10xwD0IdAyxD2ygviITHfWOjTp_Vm32ABNH0G670-OkwdDa5H8gAtsebEBBCrn8SPdgppp2PzXziOciNcBc11KalET9qx96J2B9_zcA8ZvIuH4cKXYlbKlLMoi9qF352hlyEzPECWlORzaYttHvRa_DPdYgVXcJdHs0-cqkLKXMYitft0C_5GsUQPMa1LjFX6u9ZNoW95vdYG_VMEGr7Pk8iCdR5ht8Py2Fq13WgjwHkHWQAbMQBnMhuqR_cY4bQrhJgzmVIAAg3OUgYX9Sj_t9u4rk2uW2hmHeIVNG1qVjyh2RDhj46rJsH5xIRFTYQUXo_3Fhu3_z6vANRr3KARnW2ObotrAz4n4KDe50U5XW2WB7m4VN0U2-RSWtwOUl6l_c01eR_KKjfpTnMArqWHWeLosw9NGwvquN0CUVP8YJx1hbzW4XqZAKvz-PcCGs6wCWXdzfLs9xeBzQEpQyhpoEM3ZJxs98cuX5MDeocSdRRNJWhME73ZJyC3YM9MgkntLZoiXgNciTq4iQ8Ii2X75AfQ6yJHKjSNcmTm4daboKDSTN1O7wGzFfqpJl_4ZoOAaLu8Yec5XICVz9bipsKkNroCuDDmUOyyTmdyDiwLNdiGVMLaXy2L0WAO6IvTZZ7XPxq7_xL8mNT0gPZGk8vbTqoK289JrKlDFl8O4gw8AWeABuYWXsZP6TvFS-pHZmeUJpz3UvhJavfiwvXwc3kuhKPVUDs8dk-KAHyM-2WS0Q6LHhuEL7MTBnjtI8GnAY0vZxnFwtL97smvTy6VpF1vX8DvxhhWMTqDj-PedIHEisxBBWcet_sLiyVFVJEnxDRbrQ70k7OcBl5v2P38lfSQ'
      //recaptchaResponse: '03AFceA6GSCMkMwRMHZyy7dprNcFFiiLpp4UlOejN1H-S4dM1oP1E1Mq7KDJcoWGv4D3syZ2cY8VYYB-I87FLaz65dLrHeiyAlfrXw_ucCdUUm9H8XCtsJ_HL5t9pVNxQnddHC2wdQpqC9usd9e41CKyz2g-E0TaTenkVfu0IO1IR7nolJ1QLekESKc3pIuh01EtlAdcqGrqxDnKCGhnTYyiH9AnDQ8KPjZMQarC_zJSvq_F1_6p0lTrLiPaHyr0G1QRs9-d9z3uxB5BIYHP2-n8bvD8d210yHvfxp_27V5KTwPfaPGLAFmP9EYIfTNKiA3dggc6etXy7Zv_ThTBuWz5iibwE6aKj7FUFPIoduILol5z4RCrs1yggh9SC8TtAKwWcA8yq84j9Z5f2DGRXHCIm6KHpdd9fLVUd5XdBNwcDzVuvs5_yJk2cP_vzkj86SNz5qDeXDXpqBNtNaMKT2uBVzBkyVT8-_aLG2U8oQaXKjlZZXK1aA1bOy9r2BYuSJZC1oRrGpBJBo0P2jaXCTOZcTk33YrZyftxwRTafAr0iTjeb2g3SE_HIPPKdfh2c1y-OCQn9zSZX9BFBpJZ2fQx-292qwSyMLIxmGntuMuA87QE3dFt6hoAzlv83hVQ8_oqzikEPqnO43XyB6kr4YfKKOgtWpN1EXD75fMXsc4o4qalXObNkRwpVkPM54k5vX7smIY5ZWvTevjOu8-AvnjVI5D0PtOe-Mg5S9yEE0yhjI1-322JYRruDqla3ZvixFzmY3XtVfnvDf7znMYQB-RClmauYurpEe2_3Y1jXZZpbCVoGc5Ysp8ebW7SH_XklBnWvIkjaZJLfUHybZWU5_qU6wJdIqO-E9LCGMbx755TPzN2a5M9qp99n6nzsK17itepHQkzTN8D6T7OuJg1UH6DUoYjXs2pgDeyUv-3HMtoBYKVgG19sz5CH7CvFc_U6ucv-We_ER-qfTDks5L-Zx46EQ3AirmRDB7RTI354yK6QlDQ49RfGLmfICHkbEAOgmzGwvbNPPQ1FauwAHOF8aJ8hd5F_FUma7w',
      //recaptchaResponse: '0AFcWeA6LNWKO142exiS6YrH728PXfo0K56lObcCQWTs7TVY24nfVxqSjBfL8cuRsS4_7QeCSXt9t7jYky_wb-0wgEyASlppmOdtO6SoCnqwM_dHRGICPlu_62tBeDc4ZKqrUvMrK0lOar7BP6GBsDLQ7bfwVI9RXFjep_33yFqwZrRpfKw-_Ul1RweOkuyFhIthGDle3c9DbqyVO0vPuGAzT4vsfTxl2u9WKJ_kBXLrp0dSyfEefxgFUNpi7YA9pSeNkw3jtbRtgpaotmdfgGyILiJ3tl3Znpe4pIIDsVuYYoSOZl8KTzIrbzFWz4aWfIbwovNLzHQJAzsSJnmrPkENvGQRqChSKiPwElW92GZ_8H7ayEL9Mfd1u4TERwNCcc8b-3hnTmdw3hsfREUm-etaFsqDQJXrBjmFIhbBtGyK326OLT0GEHyWgJALBUJ86pPlDhXIfavrdL_RQ7Dof0PCAUaUJOGzPawjowkqPcGK-nGS4FeW73MfXa8XWpkXPxpqhte8xh7D_zfJ9O3oRezFewyDi8VqYzUbXnFtd1YgrY4vwgrn4i-zkMLRqIfa7JjRBOzglG4mBcV6HgGCPJjaAV_K1cVLW5yHDFouS_DB9NBP8cQ7UXVbPa4FLEzEbYbCSHOlVLcCpCSfiCot_2qtWSut2miXz9dNURi3Q0F8ad_l2Auy73efj3Lt98ZjT-HRodkd9Ea6W9i2JJXwLZE7edbr1wdQanFN6H3l22KW7pCY6Pv0KZ2feOSlNj_1hhMU6onYYuk9GhKU224IGDS42ZnM9tXldLkc7E_yZV7v9dYK3Zdyj8ZRNVmvw9WHuqPkf_3KymukGJlYnVHyCzDZVOIyA8APy6MSXx_B89hFIX6HTjLNN7SQy2Otf84jEQHdSoBBLOCqmjRKDOY7WXJm0oQkXItlFhdJmlQ_Cosx9Ip56a_zNtMArxrK18o5PKIKORu6694aN1dNIDz-fyYIgnJYSDLM3UzHwC0474ZWPBLzqsDIWwcy0Aj7najYNxPWG1kfALKkYCpCybphu52SmQFDMCeiI1bRSuEkHtph_tLOccjwWf5g'
    });

    const loginHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const reqLoginApi = http.post('https://proxy.my.aronium.com/api/auth/login', loginPayload, {
      headers: loginHeaders,
    });

    loginApiTime.add(reqLoginApi.timings.duration);

    const loginApiSuccess = check(reqLoginApi, {
      'Login status is 200': (r) => r.status === 200,
      'Response contains token': (r) => {
        try {
          const body = r.json();
          return body.token !== undefined && body.token !== '';
        } catch {
          return false;
        }
      },
    });

    if (loginApiSuccess) {
      console.log('✅ Login API successful, token received.');
    } else {
      loginFailures.add(1);
      console.error(`❌ Login API failed. Status: ${reqLoginApi.status}, Body: ${reqLoginApi.body}`);
    }
  });

  sleep(1);
}
