const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;
  let t = parseInt(input[0]);
  let index = 1;
  while (t--) {
    let x = parseInt(input[index++]).toString().split("");

    let numberArr = [];

    for (num of x) {
      numberArr.push(parseInt(num));
    }

    numberArr = numberArr.sort((a, b) => a - b);

    let minimum = Math.min(...numberArr);

    if (minimum < 1) {
      for (let i = 0; i < x.length; i++) {
        if (numberArr[i] > minimum) minimum = numberArr[i];
        break;
      }
    }

    console.log(minimum);
  }
}

main();
