const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++]);

  for (let i = 0; i < t; i++) {
    const a = parseInt(input[pointer++]);
    const b = parseInt(input[pointer++]);
    const c = parseInt(input[pointer++]);
    const d = parseInt(input[pointer++]);

    if (a === b && b === c && c === d) {
      console.log("YES");
      continue;
    }
    console.log("NO");
  }
}

solve();
