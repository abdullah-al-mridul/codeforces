const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let t = parseInt(input[ptr++], 10);

  while (t--) {
    let n = parseInt(input[ptr++], 10);
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(parseInt(input[ptr++], 10));
    }

    let ops = 0;

    let negativeCount = a.filter((val) => val === -1).length;

    let zeroCount = a.filter((val) => val === 0).length;

    if (negativeCount % 2 === 0) {
      ops += zeroCount;
    } else {
      ops += zeroCount + 2;
    }

    console.log(ops);
  }
}

solve();
