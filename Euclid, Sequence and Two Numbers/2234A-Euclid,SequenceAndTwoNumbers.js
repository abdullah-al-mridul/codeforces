const fs = require("fs");

function solve(n, b) {
  let arr = [...b];
  arr = arr.sort((a, b) => b - a);
  if (arr.includes(0)) {
    console.log(-1);
    return;
  }
  function modularity(arr) {
    let verify = [];
    for (let idx = 0; idx < arr.length; idx++) {
      if (idx < arr.length - 2) {
        if (arr[idx] % arr[idx + 1] === arr[idx + 2]) {
          verify.push(arr[idx]);
          if (idx === arr.length - 3) {
            verify.push(arr[idx + 1]);
            verify.push(arr[idx + 2]);
          }
        }
      }
    }
    if (verify.length === arr.length) {
      return true;
    } else {
      return false;
    }
  }

  if (arr.length <= 2) {
    console.log([arr[0], arr[1]].join(" "));
    return;
  }
  if (modularity(arr)) {
    console.log([arr[0], arr[1]].join(" "));
  } else {
    console.log(-1);
  }
}

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++]);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++]);
    let b = [];
    for (let j = 0; j < n; j++) {
      b.push(parseInt(input[ptr++]));
    }
    solve(n, b);
  }
}

main();
