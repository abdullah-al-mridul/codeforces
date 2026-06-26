const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[pointer++], 10);
    const a = [];
    for (let j = 0; j < n; j++) {
      a.push(parseInt(input[pointer++], 10));
    }

    let sortedArr = [...a].sort((a, b) => a - b);

    if (sortedArr.every((val, idx) => a[idx] === val)) {
      console.log(sortedArr.length);
    } else {
      console.log(1);
    }
  }
}

solve();
