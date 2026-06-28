const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  let currentToken = 0;
  function nextToken() {
    return input[currentToken++];
  }

  if (input.length === 0 || input[0] === "") return;

  let q = parseInt(nextToken());

  while (q--) {
    let n = parseInt(nextToken());
    let s = nextToken();
    let t = nextToken();

    s = s.split("").sort();
    t = t.split("").sort();

    if (s.every((val, idx) => t[idx] === val)) {
      console.log("YES");
      continue;
    }
    console.log("NO");
  }
}

solve();
