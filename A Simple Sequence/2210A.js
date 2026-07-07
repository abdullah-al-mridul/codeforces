const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);

    let arr = [];

    for (let i = 1; i < n + 1; i++) {
      arr.push(i);
    }

    console.log(arr.sort((a, b) => b - a).join(" "));
  }
}

solve();
