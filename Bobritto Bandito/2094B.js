const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[pointer++], 10);
    const m = parseInt(input[pointer++], 10);
    const l = parseInt(input[pointer++], 10);
    const r = parseInt(input[pointer++], 10);

    let l_ans = Math.max(l, -m);
    let r_ans = l_ans + m;

    console.log(`${l_ans} ${r_ans}`);
  }
}

solve();
