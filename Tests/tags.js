import http from 'k6/http';
import { check, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

export let errorRate = new Rate('errors');
let groupDuration = new Trend("groupDuration");
let getUserAPITrend = new Trend("getUserAPITrend");
let getOrderAPITrend = new Trend("getOrderAPITrend");

export const options = {
  vus: 10,
  duration: '2s',
  thresholds: {
    errors: ['rate<0.1'],
    'groupDuration{groupName:groupGetGroups}': ['avg<200'],
    'groupDuration{groupName:groupGetUsers}': ['avg>300'],
    'http_req_duration{type:GATEAPITAG}': ['p(95)<100'],
    'http_req_duration{type:ORDERAPITAG}': ['p(95)<100'],
  },
  ext: {
    loadimpact: {
      projectID: 3772190,
      name: 'Learn Loadimpact Basics'
    }
  }
};

function groupWithMetrics(nameOfGroup, groupFunction) {
  let start = Date.now();
  group(nameOfGroup, groupFunction);
  groupDuration.add(Date.now() - start, { groupName: nameOfGroup });
}

export default function () {
  groupWithMetrics('groupGetUsers', function () {
    const response = http.get(
      'https://run.mocky.io/v3/d3cfd6eb-5088-43eb-b27a-0e690d870402',
      { tags: { type: "GATEAPITAG" } }
    );

    check(response, {
      'Status is 200 or 404': (r) => r.status === 200 || r.status === 404
    });

    getUserAPITrend.add(response.timings.duration, { type: "GATEAPITAG" });
    errorRate.add(response.status !== 200 && response.status !== 404);
  });

  groupWithMetrics('groupGetGroups', function () {
    const response = http.get(
      'https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods',
      { tags: { type: "ORDERAPITAG" } }
    );

    check(response, {
      'Status is 200 or 404': (r) => r.status === 200 || r.status === 404
    });

    getOrderAPITrend.add(response.timings.duration, { type: "ORDERAPITAG" });
    errorRate.add(response.status !== 200 && response.status !== 404);
  });
}
