const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let ptr = 0;
  const t = parseInt(input[ptr++], 10);
  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);

    const a = [];

    for (let j = 0; j < n; j++) {
      a.push(parseInt(input[ptr++], 10));
    }

    const b = [];

    for (let j = 0; j < n; j++) {
      b.push(parseInt(input[ptr++], 10));
    }

    let iterationCount = 0;

    while (true) {
      let ifAgreatB = false;

      for (let j = 0; j < n; j++) {
        if (a[j] > b[j]) ifAgreatB = true;
      }

      if (!ifAgreatB) {
        iterationCount++;

        break;
      }

      for (let j = 0; j < n; j++) {
        if (a[j] > b[j]) {
          a[j] = a[j] - 1;
          iterationCount++;
        }

        if (a[j] < b[j]) {
          a[j] = a[j] + 1;
        }
      }
    }

    console.log(iterationCount);
  }
}

main();
