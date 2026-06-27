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

    let maxValue = Math.max(...a);

    for (let i = 0; i < n; i++) {
      ans += maxValue;
    }

    console.log(ans);
  }
}

solve();
