const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const n = parseInt(input[ptr++], 10);
  const a = [];
  const b = [];

  for (let i = 0; i < n; i++) {
    a.push(parseInt(input[ptr++], 10));
    b.push(parseInt(input[ptr++], 10));
  }

  // declare capacity
  let maximumCapacity = 0;

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      //   count = count - parseInt(a[i]);
      count = count + parseInt(b[i]);
    } else if (i === n.length - 1) {
      count = count - parseInt(a[i]);
    } else {
      count = count - parseInt(a[i]);
      count = count + parseInt(b[i]);
    }
    // console.log(count);
    // console.log(count);
    if (count > maximumCapacity) {
      maximumCapacity = count;
    }
  }

  // debug logs
  //   console.log(n, a, b);

  // output
  console.log(maximumCapacity);
}

solve();
