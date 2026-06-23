const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const t = parseInt(input[ptr++], 10);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[ptr++], 10);
    const s = input[ptr++];

    function checkPalindrome(arr) {
      let originalArr = [...arr];
      let reverseArr = [...arr].reverse();

      if (reverseArr.every((val, idx) => val === originalArr[idx])) return true;
      return false;
    }

    if (checkPalindrome(s)) {
      console.log(0);
      //   console.log(" ");
      continue;
    }

    let sub = [];
    let idx = [];
    let newS = [];
    for (let i = 1; i < s.length + 1; i++) {
      let num = parseInt(s[i - 1]);
      if (num === 1) {
        sub.push(1);
        idx.push(i);
      }
      let newS = s.split("").filter((s) => s !== "1");
    }

    if (checkPalindrome(newS)) {
      console.log(sub.length);
      console.log(idx.join(" "));
      continue;
    }

    console.log(-1);
    // console.log(s, sub, idx);

    // console.log(n, s);
  }
}

solve();
