const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf8").trim().split(/\s+/);

  let ptr = 0;
  let t = Number(input[ptr++]);
  let ans = [];

  while (t--) {
    const n = Number(input[ptr++]);
    const a = [];

    for (let i = 0; i < n; i++) {
      a.push(Number(input[ptr++]));
    }

    let total = 0;
    for (let i = 0; i < n - 1; i++) {
      total += Math.abs(a[i] - a[i + 1]);
    }

    let best = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      let cur = total;

      if (i === 0) {
        cur -= Math.abs(a[0] - a[1]);
      } else if (i === n - 1) {
        cur -= Math.abs(a[n - 2] - a[n - 1]);
      } else {
        cur -= Math.abs(a[i - 1] - a[i]);
        cur -= Math.abs(a[i] - a[i + 1]);
        cur += Math.abs(a[i - 1] - a[i + 1]);
      }

      best = Math.min(best, cur);
    }

    ans.push(best);
  }

  console.log(ans.join("\n"));
}

solve();
