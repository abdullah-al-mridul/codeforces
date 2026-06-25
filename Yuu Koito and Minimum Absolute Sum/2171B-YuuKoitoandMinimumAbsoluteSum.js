const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8");

  let pos = 0;

  function nextToken() {
    while (pos < input.length && input.charCodeAt(pos) <= 32) {
      pos++;
    }
    if (pos >= input.length) return null;
    let start = pos;
    while (pos < input.length && input.charCodeAt(pos) > 32) {
      pos++;
    }
    return input.slice(start, pos);
  }

  const tStr = nextToken();
  if (!tStr) return;
  const t = parseInt(tStr, 10);

  let outputBuffer = [];

  for (let tc = 0; tc < t; tc++) {
    const nStr = nextToken();
    if (!nStr) break;
    const n = parseInt(nStr, 10);

    const a = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      a[i] = parseInt(nextToken(), 10);
    }

    let newArr = [];

    for (value of a) {
      if (value === -1) {
        newArr.push(0);
      } else {
        newArr.push(value);
      }
    }

    if (a[0] === -1 && a[newArr.length - 1] !== -1) {
      newArr[0] = newArr[newArr.length - 1];
    }

    if (a[0] !== -1 && a[newArr.length - 1] === -1) {
      newArr[newArr.length - 1] = newArr[0];
    }

    let differArr = [];

    for (let i = 1; i < n; i++) {
      differArr.push(newArr[i] - newArr[i - 1]);
    }

    let total = 0;

    for (num of differArr) {
      total += num;
    }

    console.log(Math.abs(total));
    console.log(newArr.join(" "));
  }
}

solve();
