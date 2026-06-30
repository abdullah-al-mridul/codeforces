const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[pointer++], 10);
    const a = input[pointer++];
    const m = parseInt(input[pointer++], 10);
    const b = input[pointer++];
    const c = input[pointer++];

    let text = [...a];

    for (let i = 0; i < m; i++) {
      if (c[i] === "V") {
        text.unshift(b[i]);
      } else {
        text.push(b[i]);
      }
    }

    console.log(text.join(""));
  }
}

solve();
