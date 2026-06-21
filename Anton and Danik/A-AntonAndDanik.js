const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let n = parseInt(input[0], 10);
  let s = input[1];

  // name of winners , A:Anton D:Danik
  const names = ["A", "D"];

  // declare wins
  let antonWins = 0;
  let danikWins = 0;

  // detect wins
  for (let i = 0; i < n; i++) {
    if (s[i] === names[0]) {
      antonWins++;
    } else {
      danikWins++;
    }
  }

  // final message
  let msg;

  // calculate message
  if (antonWins > danikWins) {
    msg = "Anton";
  } else if (antonWins === danikWins) {
    msg = "Friendship";
  } else {
    msg = "Danik";
  }

  // debug logs
  //   console.log(n, s);

  // output
  console.log(msg);
}

solve();
