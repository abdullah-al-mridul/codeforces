const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const p = [];
    for (let j = 0; j < n; j++) {
      p.push(parseInt(input[ptr++], 10));
    }

    let maxValue = -Infinity;

    for (const num of p) {
      if (num > maxValue) maxValue = num;
    }

    let outPermutation = [];

    for (const num of p) {
      if (maxValue < 3) {
        if (num === 1) {
          outPermutation.push(2);
        } else {
          outPermutation.push(1);
        }

        continue;
      }

      if (num === maxValue) {
        outPermutation.push(num);
        continue;
      }

      outPermutation.push(maxValue - num);
    }

    console.log(outPermutation.join(" "));
  }
}

solve();
