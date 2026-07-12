const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input2.txt" : 0;
  const input = fs.readFileSync(source, "utf-8");
  let pos = 0;

  function nextInt() {
    while (pos < input.length && input.charCodeAt(pos) <= 32) {
      pos++;
    }
    if (pos >= input.length) return null;
    let start = pos;
    while (pos < input.length && input.charCodeAt(pos) > 32) {
      pos++;
    }
    return parseInt(input.slice(start, pos), 10);
  }

  const t = nextInt();
  if (t === null) return;

  for (let i = 0; i < t; i++) {
    const n = nextInt();

    if (n == 1) {
      console.log(1);
      continue;
    }

    if (n == 2) {
      console.log(-1);
      continue;
    }

    let ansArr = [];

    for (let i = 0; i < n; i++) {
      if (ansArr.length < 2) {
        ansArr.push(1, 2);
        i++;
        i++;
      }

      let sumPrev = ansArr.reduce((acc, crr) => acc + crr, 0);

      ansArr.push(sumPrev);
    }

    console.log(ansArr.join(" "));
  }
}

solve();
