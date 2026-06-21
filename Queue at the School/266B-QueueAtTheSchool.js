const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length < 2 || input[0] === "") return;

  let ptr = 0;
  const n = parseInt(input[ptr++], 10);
  const t = parseInt(input[ptr++], 10);
  let s = input[ptr++];

  for (let i = 0; i < t; i++) {
    s = s.replace(/BG/g, "GB");
  }
  console.log(s);
}

solve();
