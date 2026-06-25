const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const nextInt = () => parseInt(input[pointer++], 10);

  const t = nextInt();
  for (let i = 0; i < t; i++) {
    const n = nextInt();
    const a = [];
    for (let j = 0; j < n; j++) {
      a.push(nextInt());
    }

    let differences = [];

    let participants = [...a].sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
      differences.push(participants[i + 1] - participants[i]);
      i++;
    }

    console.log(Math.max(...differences));
  }
}

solve();
