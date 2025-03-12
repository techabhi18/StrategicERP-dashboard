import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 50 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"],
  },
};

export default function () {
  let url = "https://yourdomain.com/api/company/save";
  let payload = JSON.stringify({
    CompanyName: "Test Company",
    CompanyCode: 123,
    City: "Test City",
    State: "Test State",
    Country: "Test Country",
    Pincode: 123456,
    RegisteredAddress: "Test Address",
    CommunicationAddress: "Test Communication Address",
    CompanyStatus: "Active",
  });
  let params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = http.post(url, payload, params);
  check(res, {
    "status is 200": (r) => r.status === 200,
    "duration < 500ms": (r) => r.timings.duration < 500,
  });
  sleep(1);
}
