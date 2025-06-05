import http from 'k6/http';
import { check, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

export let errorRate = new Rate('errors');
let groupDuration = Trend("groupDuration");

export const options = {
  vus: 10,
  duration: '2s',
  thresholds: {
    errors: ['rate<0.1'],
    'groupDuration{groupName:groupGetGroups}': ['avg>3000'],
    'groupDuration{groupName:groupGetUsers}': ['avg>300'],
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
  groupDuration.add(Date.now() - start, {groupName: nameOfGroup});
}

export default function () {
  groupWithMetrics('groupGetUsers', function () {
    const response = http.get('https://run.mocky.io/v3/d3cfd6eb-5088-43eb-b27a-0e690d870402');
    check(response, {
      'Status is 200 or 404': (r) => r.status === 200
    });
    errorRate.add(response.status !== 200 && response.status !== 404);
  });

  groupWithMetrics('groupGetGroups', function () {
    const response = http.get('https://webshop-dev.delivergate.com/api/v1/webshop-brand/1/outlet/2/order-methods');
    check(response, {
      'Status is 200 or 404': (r) => r.status === 200
    });
    errorRate.add(response.status !== 200 && response.status !== 404);
  });
}