const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let t = parseInt(input[0], 10);
  let currentIndex = 1;
  while (t-- > 0) {
    let a = [];
    for (let i = 0; i < 7; i++) {
      a.push(parseInt(input[currentIndex++], 10));
    }

    let sortedArr = [...a].sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
      if (i !== sortedArr.length - 1) {
        sortedArr[i] = sortedArr[i] * -1;
      }
    }

    let total = 0;

    for (num of sortedArr) {
      total += num;
    }

    console.log(total);
  }
}

solve();
