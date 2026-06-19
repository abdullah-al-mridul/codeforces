const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let n = parseInt(input[ptr++], 10);

  let x = 0;

  for (let i = 0; i < n; i++) {
    let statement = input[ptr++];

    // check if statement has +,-
    if (statement.includes("+")) {
      x++;
    } else {
      x--;
    }
  }

  console.log(x);
}

solve();
