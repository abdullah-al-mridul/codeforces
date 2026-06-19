const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let n = parseInt(input[ptr++], 10);
  let k = parseInt(input[ptr++], 10);

  let scores = [];
  for (let i = 0; i < n; i++) {
    scores.push(parseInt(input[ptr++], 10));
  }

  // total advancers
  let advancers = 0;

  //   console.log("scores  ", scores);
  //   console.log("k :", k);

  // get the score to compare others
  const scoreToCompare = scores[k - 1];

  //   console.log("compare with:", scoreToCompare);

  // check others scores
  for (let i = 0; i < scores.length; i++) {
    // score must to be positive
    // if (scores[k - 1] > 0) {
    if (scores[i] >= scoreToCompare && scores[i] > 0) {
      // advance them to next level
      advancers++;
    }
    // }
  }

  console.log(advancers);
}

solve();
