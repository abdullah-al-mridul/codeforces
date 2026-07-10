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

    if (p.length < 2) {
      console.log(1);
      continue;
    }

    let arr = [];

    for (_ of p) arr.push(2);

    console.log(arr.join(" "));
  }
}

solve();
