const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[ptr++], 10);
    const a = [];
    for (let i = 0; i < n; i++) {
      a.push(parseInt(input[ptr++], 10));
    }

    let winners = new Set();
    function checkWinner(idx, a) {
      let newArr = [...a];
      let currentIndex = idx;

      let remainingElements = newArr.filter((val) => val > 0).length;

      if (remainingElements === 0) return -1;

      while (true) {
        if (newArr[currentIndex] > 0) {
          newArr[currentIndex]--;

          if (newArr[currentIndex] === 0) {
            remainingElements--;

            if (remainingElements === 0) {
              return currentIndex;
            }
          }
        }

        currentIndex = (currentIndex + 1) % newArr.length;
      }
    }

    for (let startIndex = 0; startIndex < a.length; startIndex++) {
      winners.add(checkWinner(startIndex, a));
    }
    console.log(winners.size);
  }
}

solve();
