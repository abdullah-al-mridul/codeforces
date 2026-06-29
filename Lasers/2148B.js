const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8");
  let pos = 0;
  function nextInt() {
    while (pos < input.length && input.charCodeAt(pos) <= 32) {
      pos++;
    }
    if (pos >= input.length) return null;
    let res = 0;
    let sign = 1;
    if (input.charCodeAt(pos) === 45) {
      sign = -1;
      pos++;
    }
    while (pos < input.length && input.charCodeAt(pos) > 32) {
      res = res * 10 + (input.charCodeAt(pos) - 48);
      pos++;
    }
    return res * sign;
  }

  const t = nextInt();
  if (t === null) return;

  for (let i = 0; i < t; i++) {
    const n = nextInt();
    const m = nextInt();
    const x = nextInt();
    const y = nextInt();

    const a = [];
    for (let j = 0; j < n; j++) {
      a.push(nextInt());
    }

    const b = [];
    for (let j = 0; j < m; j++) {
      b.push(nextInt());
    }

    console.log(n + m);

    // console.log("number of line for x :", n, "number of line for y :", m, x, y);
  }
}

solve();
