const factorial = require("./factorial");

module.exports = function nthPerm(arr, n) {
  let radixes = [];
  let max = 0;
  while (n >= factorial(max)) max++;
  max--;
  let o = n;
  for (let u = max; u > 0; u--) {
    radixes.push(Math.floor(n / factorial(u)));
    n %= factorial(u);
  }
  radixes = radixes.reverse();
  let res = [];
  let from = [...arr];
  for (let u = from.length; u >= 0; u--) {
    res = res.concat(from.splice(radixes[u - 2] || 0, 1));
  }
  return res;
}
