module.exports = function calculateScore(a, b, N) {
  for (let score = N - 1; score > 0; score--) {
    let c = b >> ((N - score) * 3);
    let d = a & ((1 << (score*3+1)) - 1);
    // console.log(score, a.toString(2), d.toString(2));
    if (c === d) return score;
  }
  return 0;
}
