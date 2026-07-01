const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const n = BigInt(input[pointer++]);

    let ans = [];

    for (let k = BigInt(1); true; k++) {
      if (10n ** k > n) break;

      if (n % (10n ** k + 1n) === 0n) {
        ans.push(n / (10n ** k + 1n));
      }
    }

    ans = [...ans].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

    console.log(ans.length);

    if (ans.length > 0) console.log(ans.join(" "));
  }
}

solve();
