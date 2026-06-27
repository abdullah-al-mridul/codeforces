const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let currentIndex = 0;
  const t = parseInt(input[currentIndex++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[currentIndex++], 10);

    let perfectRoots = [];

    for (let i = 0; i < n; i++) {
      perfectRoots.push(i + 1);
    }

    console.log(perfectRoots.join(" "));
  }
}

main();
