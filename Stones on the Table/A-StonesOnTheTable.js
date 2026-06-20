const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let n = parseInt(input[0], 10);
  let color = input[1];

  // deleted stones
  let D_STONES = 0;

  // array of stones
  let arrayOfStones = [];

  // calculate for every stone
  for (let i = 0; i < n; i++) {
    // check if previous stone is same color
    if (arrayOfStones[arrayOfStones.length - 1] !== color[i]) {
      // make the unique line
      arrayOfStones.push(color[i]);
    } else {
      // delete a stone from the line
      D_STONES++;
    }
  }

  // debug logs
  //   console.log(D_STONES, arrayOfStones);

  // output
  console.log(D_STONES);
}

solve();
