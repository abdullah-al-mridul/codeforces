const fs = require("fs");

const sum = (arr) => {
  let sum = 0;

  for (num of arr) {
    sum += num;
  }

  return sum;
};

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[ptr++], 10);
    const a = [];
    for (let i = 0; i < n; i++) {
      a.push(parseInt(input[ptr++], 10));
    }

    let total = sum(a);

    let finalArr = [...a];

    if (total === 0) {
      console.log("YES");
      continue;
    }

    let done = false;

    if (total < 0) {
      for (let i = 0; i < n; i++) {
        if (finalArr[i] === -1 && finalArr[i + 1] === -1 && i < n - 1) {
          finalArr[i] = 1;
          finalArr[i + 1] = 1;
          if (sum(finalArr) === 0) {
            console.log("YES");
            done = true;
            break;
          }
        }
      }
    }

    if (total > 0) {
      for (let i = 0; i < n; i++) {
        if (finalArr[i] === 1 && finalArr[i + 1] === 1 && i < n - 1) {
          finalArr[i] = -1;
          finalArr[i + 1] = -1;
          if (sum(finalArr) === 0) {
            console.log("YES");
            done = true;
            break;
          }
        }
      }
    }

    if (!done) console.log("NO");
  }
}

solve();
