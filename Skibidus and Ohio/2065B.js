const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let t = parseInt(input[0]);
  let index = 1;
  while (t--) {
    let s = input[index++];

    let possible = false;

    for (let i = 0; i < s.length; i++) {
      let firstWord = s[i];

      let secondWord = s[i + 1];

      if (firstWord === secondWord) {
        possible = true;

        break;
      }
    }

    if (possible) {
      console.log(1);

      continue;
    }

    console.log(s.length);
  }
}

solve();
