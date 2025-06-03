import http from 'k6/http';
import { check, group } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metric to track errors
export let errorRate = new Rate('errors');

export let options = {
  vus: 10,
  duration: '2s',
  thresholds: {
    errors: ['rate<0.1'],
  },
}; // ← semicolon instead of comma

// Default function that runs for each virtual user iteration
export default function () {
  // Group for Get Users API
  group('groupGetUsers', function () {
    const responseGetUsers = http.get('https://run.mocky.io/v3/d3cfd6eb-5088-43eb-b27a-0e690d870402');
    const checkGetUsers = check(responseGetUsers, {
      'Get Users: Status is 200': (r) => r.status === 200,
    });
    errorRate.add(!checkGetUsers);
  });

  // Group for Get Groups API
  group('groupGetGroups', function () {
    const responseGetGroups = http.get('https://run.mocky.io/v3/bb4ac454-8307-46e2-9281-598c9c754121');
    const checkGetGroups = check(responseGetGroups, {
      'Get Groups: Status is 200': (r) => r.status === 200,
    });
    errorRate.add(!checkGetGroups);
  });
}
