const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let t = parseInt(input[0]);
  let index = 1;
  while (t--) {
    let word1 = input[index++];

    let word2 = input[index++];

    let word3 = input[index++];

    console.log(word1[0] + word2[0] + word3[0]);
  }
}

solve();
