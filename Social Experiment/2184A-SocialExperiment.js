const fs = require("fs");

function solve(n) {
  if (n <= 3) {
    console.log(n);
    return;
  }
  if (n % 2 === 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;

  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  const t = parseInt(input[0], 10);
  let currentIndex = 1;

  for (let i = 0; i < t; i++) {
    if (currentIndex >= input.length) break;
    const n = parseInt(input[currentIndex++], 10);
    solve(n);
  }
}

main();
