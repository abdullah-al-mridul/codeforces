const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;

  const n = parseInt(input[ptr++], 10);

  const opinions = [];
  for (let i = 0; i < n; i++) {
    opinions.push(parseInt(input[ptr++], 10));
  }

  for (let i = 0; i < n; i++) {
    if (!opinions.includes(1)) {
      console.log("EASY");
      break;
    } else {
      console.log("HARD");
      break;
    }
    // console.log(typeof opinions[0]);
  }
}

solve();
