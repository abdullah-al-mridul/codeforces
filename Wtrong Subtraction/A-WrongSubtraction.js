const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let n = parseInt(input[0], 10);
  let k = parseInt(input[1], 10);

  // calculate with wrong algorithm
  for (i = 0; i < k; i++) {
    if (n.toString()[n.toString().length - 1] === "0") {
      n = n / 10;
    } else {
      n--;
    }
  }

  // debug logs
  //   console.log(n);

  // output
  console.log(n);
}

solve();
