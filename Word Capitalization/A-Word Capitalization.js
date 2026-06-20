const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // define result
  let RESULT;

  // input
  let s = input[0];
  s = s.split("");

  // capitalization logic
  s[0] = s[0].toUpperCase();
  RESULT = s.join("");

  // debug logs
  //   console.log("input:", input[0]);
  //   console.log(["a", "b"].join());

  // output
  console.log(RESULT);
}

solve();
