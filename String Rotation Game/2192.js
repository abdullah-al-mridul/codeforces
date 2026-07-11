const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\r?\n/);
  if (input.length === 0 || input[0] === "") return;
  let lineIndex = 0;
  const t = parseInt(input[lineIndex++], 10);

  function checkBlock(s) {
    let totalCurrentBlock = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[i + 1]) totalCurrentBlock++;
    }

    return totalCurrentBlock;
  }

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[lineIndex++], 10);
    let s = input[lineIndex++].split("");

    let maxBlocks = 0;

    for (let i = 0; i < n; i++) {
      let currentBlock = checkBlock(s);
      if (currentBlock > maxBlocks) maxBlocks = currentBlock;

      s.unshift(s[s.length - 1]);
      s.pop();
    }

    console.log(maxBlocks);
  }
}

solve();
