const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let nStr = input[0];

  // let define output
  let result;

  // lucky digit
  const luckyDigit = ["4", "7"];

  // total lucky digit find
  let totalLuckyDigit = 0;

  // find lucky digits
  for (let i = 0; i < nStr.length; i++) {
    if (luckyDigit.includes(nStr[i])) {
      totalLuckyDigit++;
    }
  }

  // check if total found number is a lucky or not
  if (luckyDigit.includes(totalLuckyDigit.toString()[0])) {
    result = "YES";
  } else {
    result = "NO";
  }

  // debug logs
  //   console.log(luckyDigit.includes("7"));

  // output
  console.log(result);
}

solve();
