const fs = require("fs");

const source = fs.existsSync("input.txt") ? "input.txt" : 0;
const input = fs.readFileSync(source, "utf8").trim().split(/\s+/);

let ptr = 0;
let t = Number(input[ptr++]);

let ans = [];

while (t--) {
  const n = Number(input[ptr++]);
  const k = Number(input[ptr++]);
  const s = input[ptr++];

  let ok = true;

  for (let start = 0; start < k; start++) {
    let ones = 0;

    for (let pos = start; pos < n; pos += k) {
      if (s[pos] === "1") ones++;
    }

    if (ones % 2) {
      ok = false;
      break;
    }
  }

  ans.push(ok ? "YES" : "NO");
}

console.log(ans.join("\n"));
