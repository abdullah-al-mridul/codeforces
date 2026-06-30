const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let i = 0; i < t; i++) {
    const x = parseInt(input[ptr++], 10);

    console.log(10 ** x.toString().split("").length + 1);
  }
}

solve();
