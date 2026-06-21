const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // result
  let result;

  let s = input[0];
  let t = input[1];

  // converted text , it should be same as t
  let converted = "".split("");

  // convert language
  for (i = 0; i < s.length; i++) {
    if (i === 0) {
      converted.push(s[t.length - 1]);
    } else {
      converted.push(s[t.length - (i + 1)]);
    }
  }

  // match them
  converted = converted.join("");
  if (t === converted && t.split("").length === s.split("").length) {
    result = "YES";
  } else {
    result = "NO";
  }

  // debug logs
  //   console.log(s, t, converted, t.split("").length);

  console.log(result);
}

solve();
