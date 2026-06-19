const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length < 2 || input[0] === "") return;

  // get inputes
  let str1 = input[0];
  let str2 = input[1];

  // declare result
  let result = 0;

  // length of the string , both of them will be same as said
  const strLength = str1.length;

  // capitalize both string to fare compare
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // extract the result
  let IS_EXTRACTED = false;
  for (let i = 0; i < strLength; i++) {
    if (str1[i] !== str2[i] && IS_EXTRACTED === false) {
      if (str1[i] < str2[i]) {
        result = -1;
      } else {
        result = 1;
      }
      IS_EXTRACTED = true;
    }
  }

  // debug console
  //   console.log(str1, str2, strLength);
  //   console.log("l" < "d");

  // output
  console.log(result);
}

solve();
