const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const k = parseInt(input[pointer++], 10);
    const x = parseInt(input[pointer++], 10);
    // console.log(x, k);
    // if (x === 1) {
    //   console.log(k + 1);
    //   continue;
    // }
    // if (k === x) {
    //   console.log(k * x + 1);
    //   continue;
    // }
    // if (
    //   ((k % 2 === 0 && x % 2 !== 0) || (k % 2 !== 0 && x % 2 === 0)) &&
    //   x !== 1
    // ) {
    //   console.log(x * k);
    //   continue;
    // }
    // if (k % 2 !== 0 && x % 2 !== 0) {
    //   console.log(k + x);
    //   continue;
    // }
    console.log(k * x + 1);
  }
}

solve();
