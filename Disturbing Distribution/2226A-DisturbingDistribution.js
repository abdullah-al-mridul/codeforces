const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let currentToken = 0;
  const nextInt = () => parseInt(input[currentToken++], 10);

  const t = nextInt();

  for (let i = 0; i < t; i++) {
    const n = nextInt();
    let w = [];
    for (let j = 0; j < n; j++) {
      w.push(nextInt());
    }
    let totalOP = 0;
    let lastGreaterIdx = -1;

    for (let j = 0; j < n; j++) {
      if (w[j] > 1) {
        totalOP += w[j];
        lastGreaterIdx = j;
      }
    }

    if (lastGreaterIdx === -1) {
      totalOP = 1;
    } else {
      let hasTrailingOne = false;
      for (let j = lastGreaterIdx + 1; j < n; j++) {
        if (w[j] === 1) {
          hasTrailingOne = true;
          break;
        }
      }
      if (hasTrailingOne) {
        totalOP += 1;
      }
    }
    // console.log(w);
    console.log(totalOP % 676767677);
  }
}

solve();
