const fs = require("fs");

function solve(n, s) {
  let openingBrackets = s.split("").filter((val) => val === "(").length;

  let closingBrackets = s.split("").filter((val) => val === ")").length;

  if (openingBrackets === closingBrackets) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);

  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  let t = parseInt(input[pointer++]);

  while (t--) {
    let n = parseInt(input[pointer++]);
    let s = input[pointer++];
    solve(n, s);
  }
}

main();
