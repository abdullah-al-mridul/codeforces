const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // define result
  let RESULT;

  let s = input[0];

  // split the string by '+' , then sort and join again , finally set RESULT
  const splitStr = s.split("+").sort();
  const sortedMath = splitStr.join("+");
  RESULT = sortedMath;

  // debug logs
  // console.log(typeof sortedMath);

  // output
  console.log(RESULT);
}

solve();
