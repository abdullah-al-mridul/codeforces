const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // input
  let s = input[0];

  let correctedWord = "";

  // alphabets
  const alpha_C = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // check
  let totalCapital = 0;
  for (let i = 0; i < s.length; i++) {
    if (alpha_C.includes(s[i])) {
      totalCapital++;
    }
  }
  let totalSmall = s.length - totalCapital;
  if (totalCapital > totalSmall) {
    correctedWord = s.toUpperCase();
  } else {
    correctedWord = s.toLocaleLowerCase();
  }

  // debug logs
  //   console.log(s, alpha_C, totalCapital, totalSmall);

  // output
  console.log(correctedWord);
}

solve();
