const nthPerm = require("./nthperm");
const factorial = require("./factorial");

// these are numbers; they are encoded as a series of N 3-bit integers, allowing up to N=8

module.exports = function perms(N) {
  let res = [];
  let res2 = [];
  let current = [];
  for (let n = 0; n < N; n++) current.push(n);
  for (let n = 0; n < factorial(N); n++) {
    res2.push(nthPerm(current, n));
    res.push(toNumber(nthPerm(current, n), N));
  }
  return res;
}

function toNumber(arr, N) {
  let res = 0;
  for (let n = 0; n < N; n++) {
    res += arr[n] << ((N - n - 1)*3);
  }
  return res;
}
