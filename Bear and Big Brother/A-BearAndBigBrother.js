const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // define result
  let RESULT = 0;

  // input
  let limakWeight = Math.floor(input[0]);
  let bobWeight = Math.floor(input[1]);

  // bears weight multiplication each year
  const limakWM = 3;
  const bobWM = 2;

  // check if limak become heavier than his brother
  let compare = limakWeight > bobWeight;

  for (let i = 0; !compare; i++) {
    limakWeight = limakWeight * limakWM;
    bobWeight = bobWeight * bobWM;
    compare = limakWeight > bobWeight;
    RESULT++;
  }

  // debug logs
  //   console.log(limakWeight, bobWeight);

  // output
  console.log(RESULT);
}

solve();
