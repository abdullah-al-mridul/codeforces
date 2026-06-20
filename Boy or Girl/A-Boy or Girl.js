const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // define a result
  let result;

  // username input
  let username = input[0];

  // main logic : hero mathod , we can push every letter of the username in a array in distinct
  let distinctChars = [];
  for (let i = 0; i < username.length; i++) {
    if (!distinctChars.includes(username[i])) {
      distinctChars.push(username[i]);
    }
  }

  // cook result
  const IsMale = distinctChars.length % 2 !== 0;
  result = IsMale ? "IGNORE HIM!" : "CHAT WITH HER!";

  // debug logs
  //   console.log(username);
  //   console.log("unique characters:", distinctChars);

  console.log(result);
}

solve();
