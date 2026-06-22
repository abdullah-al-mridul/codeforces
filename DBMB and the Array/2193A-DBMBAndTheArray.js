const fs = require("fs");
const source = fs.existsSync("input.txt") ? "input.txt" : 0;
const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

let ptr = 0;
if (input.length > 0 && input[0] !== "") {
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const s = parseInt(input[ptr++], 10);
    const x = parseInt(input[ptr++], 10);

    const a = [];
    for (let j = 0; j < n; j++) {
      a.push(parseInt(input[ptr++], 10));
    }

    let totalSum = 0;

    for (num of a) {
      totalSum += num;
    }

    if (totalSum === s) {
      console.log("YES");
      continue;
    }

    if (totalSum > s) {
      console.log("NO");
      continue;
    }

    let target = s - totalSum;

    if (target % x === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }

    // console.log("test");
    // console.log(n, s, x, a, totalSum, target);
  }
}
