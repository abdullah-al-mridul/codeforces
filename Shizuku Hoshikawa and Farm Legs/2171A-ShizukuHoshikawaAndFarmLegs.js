const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let t = parseInt(input[0], 10);
  let currentIndex = 1;

  while (t--) {
    let n = parseInt(input[currentIndex++], 10);
    // console.log("legs", n);

    if (n % 2 !== 0) {
      console.log(0);
      continue;
    }
    if (n === 2) {
      console.log(1);
      continue;
    }

    let divisedValue = 0;

    divisedValue += n / 2;
    divisedValue += n / 4;
    divisedValue = Math.floor(n - divisedValue);

    console.log(Math.ceil(divisedValue + 1));
  }
}

main();
