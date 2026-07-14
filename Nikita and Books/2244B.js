const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8");

  const tokens = input.trim().split(/\s+/);
  let pos = 0;

  if (tokens.length === 0 || tokens[0] === "") return;

  function nextToken() {
    if (pos >= tokens.length) return null;
    return tokens[pos++];
  }

  function nextInt() {
    const token = nextToken();
    return token ? parseInt(token, 10) : null;
  }

  const t = nextInt();
  if (t === null) return;

  let output = [];

  for (let tc = 0; tc < t; tc++) {
    const n = nextInt();
    if (n === null) break;

    const a = [];
    for (let i = 0; i < n; i++) {
      a.push(nextInt());
    }

    if (a[0] === 1 && a[1] === 1) {
      console.log("NO");
      continue;
    }

    let totalBookReq = 0;
    let booksHave = 0;

    let imp = false;

    for (let i = 1; i < n + 1; i++) {
      totalBookReq += i;
      booksHave += a[i - 1];

      if (totalBookReq > booksHave) {
        console.log("NO");
        imp = true;
        break;
      }
    }

    if (imp === true) continue;

    if (totalBookReq > booksHave) {
      console.log("NO");
      continue;
    }

    console.log("YES");
  }

  console.log(output.join("\n"));
}

solve();
