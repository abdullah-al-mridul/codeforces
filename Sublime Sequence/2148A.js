const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const x = parseInt(input[pointer++], 10);
    const n = parseInt(input[pointer++], 10);

    let arr = [];

    for (let i = 1; i < n + 1; i++) {
      if (i % 2 !== 0) {
        arr.push(x);
      } else {
        arr.push(-x);
      }
    }

    let totalSum = 0;

    for (num of arr) {
      totalSum += num;
    }

    console.log(totalSum);
  }
}

main();
