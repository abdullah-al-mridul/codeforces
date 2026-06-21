const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let n = parseInt(input[ptr++], 10);
  let h = parseInt(input[ptr++], 10);

  let a = [];
  for (let i = 0; i < n; i++) {
    a.push(parseInt(input[ptr++], 10));
  }

  let minWidth = 0;

  let normalHeight = 0;
  let abnormalHeight = 0;

  // calculate normal and abnormal
  for (let i = 0; i < n; i++) {
    if (a[i] > h) {
      abnormalHeight = abnormalHeight + 2;
    } else {
      normalHeight++;
    }
  }

  // result
  minWidth = abnormalHeight + normalHeight;

  // debug console
  //   console.log(a);

  console.log(minWidth);
}

solve();
