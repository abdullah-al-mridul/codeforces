const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const c = parseInt(input[ptr++], 10);
    const k = parseInt(input[ptr++], 10);

    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(parseInt(input[ptr++], 10));
    }

    let a = [...arr].sort((a, b) => a - b);

    let totalLessValue = 0;

    for (num of a) {
      if (num < c) totalLessValue += num;
    }

    if (totalLessValue < 1) {
      console.log(c);
      continue;
    }

    let initialCheck = c + k;

    for (num of a) {
      if (num < initialCheck) initialCheck += num;
    }

    console.log(initialCheck);

    // console.log(totalLessValue, c, k, a);
  }
}

solve();
