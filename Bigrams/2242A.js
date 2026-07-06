const fs = require("fs");

function solve(k, c) {
  if (k === 1 && c[0] < 3) {
    console.log("NO");
    return;
  }

  if (k === 1 && c[0] >= 3) {
    console.log("YES");
    return;
  }

  let totalThreeOrGreat = 0;
  let totalTwo = 0;

  for (num of c) {
    if (num === 2) {
      totalTwo++;
    }
    if (num >= 3) {
      totalThreeOrGreat++;
    }
  }

  if (totalThreeOrGreat >= 1) {
    console.log("YES");
    return;
  }

  if (totalTwo >= 2) {
    console.log("YES");
    return;
  }

  console.log("NO");
}

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let i = 0; i < t; i++) {
    const k = parseInt(input[ptr++], 10);
    const c = [];
    for (let j = 0; j < k; j++) {
      c.push(parseInt(input[ptr++], 10));
    }

    solve(k, c);
  }
}

main();
