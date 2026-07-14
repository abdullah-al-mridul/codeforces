const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  function splitConsecutive(input) {
    if (!input) return [];

    const result = [];
    let currentChunk = input[0];

    for (let i = 1; i < input.length; i++) {
      const char = input[i];

      if (char === currentChunk[0]) {
        currentChunk += char;
      } else {
        result.push(currentChunk);
        currentChunk = char;
      }
    }

    result.push(currentChunk);
    return result;
  }

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++], 10);
    const s = input[ptr++];

    let arr = splitConsecutive(s).filter((val) => val.includes("#"));

    let totalMaxHashCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > totalMaxHashCount) totalMaxHashCount = arr[i].length;
    }

    if (totalMaxHashCount === 0) {
      console.log(0);
      continue;
    }

    console.log(Math.round(totalMaxHashCount / 2));
  }
}

solve();
