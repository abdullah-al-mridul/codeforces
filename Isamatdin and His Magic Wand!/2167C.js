const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;
  let pointer = 0;
  const next = () => input[pointer++];
  const nextInt = () => parseInt(next(), 10);

  let t = nextInt();
  while (t--) {
    let n = nextInt();
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(nextInt());
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < n; i++) {
      if (a[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    if (oddCount === 0 || evenCount === 0) {
      console.log(a.join(" "));
      continue;
    }

    console.log(a.sort((a, b) => a - b).join(" "));
  }
}

main();
