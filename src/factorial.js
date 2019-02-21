let factorials = [1, 1, 2, 6, 24, 120];

module.exports = function factorial(n) {
  if (n >= factorials.length) {
    for (let u = factorials.length; u <= n; u++) {
      factorials[u] = factorials[u - 1] * u;
    }
  }
  return factorials[n];
}
