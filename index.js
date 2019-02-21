const factorial = require("./src/factorial");
const nthPerm = require("./src/nthperm");
const calculateScore = require("./src/calculatescore.js");

const args = require("yargs").argv;
const N = args.n;

const perms = require("./src/perms")(N);

// console.log(perms);
let maxScore = 0;

for (let n = 0; n < factorial(perms.length) && n < 100000; n++) {
  let superPerms = nthPerm(perms, n);
  let score = 0;
  for (let n = 1; n < superPerms.length; n++) {
    score += calculateScore(superPerms[n - 1], superPerms[n], N);
  }
  if (score > maxScore) {
    maxScore = score;
    // console.log(N*perms.length - maxScore, n);
  }
}

console.log(">", N*perms.length - maxScore);
