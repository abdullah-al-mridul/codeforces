const fs = require("fs");

function solve(k, x) {
  let oldVal = 0;

  for (let i = 0; i < k; i++) {
    if (oldVal === 0) {
      oldVal = x * 2;
    } else {
      oldVal = oldVal * 2;
    }
  }

  console.log(oldVal);
}

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const k = parseInt(input[pointer++], 10);
    const x = parseInt(input[pointer++], 10);
    solve(k, x);
  }
}

main();
