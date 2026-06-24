const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const a = [];
    for (let j = 0; j < n; j++) {
      a.push(parseInt(input[ptr++], 10));
    }

    let ans = 0;

    // console.log(a);

    let sorted = [...a].sort((a, b) => a - b);

    // const uniquePositions = new Set();
    let X = sorted[Math.floor(n / 2)];
    let lessThanX = 0;
    let greaterThanX = 0;

    for (let i = 0; i < n; i++) {
      //   uniquePositions.add(sorted[i]);
      if (sorted[i] < X) {
        lessThanX++;
      }
      if (sorted[i] > X) {
        greaterThanX++;
      }
    }

    if (lessThanX === greaterThanX) {
      console.log(lessThanX);
    }
    if (lessThanX !== greaterThanX) {
      //   console.log(Math.abs(lessThanX - greaterThanX));
      console.log(Math.max(lessThanX, greaterThanX));
    }
    // console.log(Math.max(10, 20));
    // console.log(sorted, X);
    // console.log("less than x :", lessThanX, "greater than X :", greaterThanX);

    // ans = Math.floor(uniquePositions.size / 2);
    // console.log(ans);
  }
}

solve();
