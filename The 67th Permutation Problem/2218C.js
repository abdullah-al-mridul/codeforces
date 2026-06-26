const fs = require("fs");

function solve(n) {
  let arr = [];

  for (let i = 0; i < n * 3; i += 3) {
    if (i === 0) {
      arr[i] = 1;
      arr[i + 1] = n + 1;
      arr[i + 2] = n + 2;
    } else {
      arr[i] = arr[i - 3] + 1;
      arr[i + 1] = arr[i - 2] + 2;
      arr[i + 2] = arr[i - 1] + 2;
    }
  }

  console.log(arr.join(" "));
}

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    let n = parseInt(input[index++]);
    solve(n);
  }
}

main();
