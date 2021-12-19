//// Source for this test file: https://k6.io/docs/getting-started/running-k6/

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
