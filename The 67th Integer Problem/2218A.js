const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const x = parseInt(input[ptr++], 10);

    if (x === 0) {
      console.log(0);
      continue;
    }

    if (x + 1 > 67) {
      console.log(67);
      continue;
    }

    if (x + 1 < -67) {
      console.log(-67);
      continue;
    }

    console.log(x + 1);
  }
}

solve();
