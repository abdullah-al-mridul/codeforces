const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let t = parseInt(input[0], 10);
  let index = 1;
  while (t--) {
    let n = parseInt(input[index++], 10);

    if (n % 4 === 0) {
      console.log("Bob");
      continue;
    }

    console.log("Alice");
  }
}

solve();
