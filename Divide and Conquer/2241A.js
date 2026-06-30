const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    let x = parseInt(input[idx++]);
    let y = parseInt(input[idx++]);

    if (x % y === 0) {
      console.log("YES");
      continue;
    }
    console.log("NO");
  }
}

solve();
