const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8");
  let pos = 0;
  function nextToken() {
    while (pos < input.length && input.charCodeAt(pos) <= 32) {
      pos++;
    }
    if (pos >= input.length) return null;
    let start = pos;
    while (pos < input.length && input.charCodeAt(pos) > 32) {
      pos++;
    }
    return input.slice(start, pos);
  }

  let tStr = nextToken();
  if (!tStr) return;
  let t = parseInt(tStr, 10);

  const gcdBigInt = (a, b) => {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;

    while (b !== 0n) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const gcdArrayBigInt = (arr) => {
    if (arr.length === 0) return 0n;
    return arr.reduce((accumulator, current) =>
      gcdBigInt(accumulator, current),
    );
  };

  while (t--) {
    let n = parseInt(nextToken(), 10);
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(BigInt(nextToken()));
    }

    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71,
    ];

    let x = false;

    for (let i = 0; !x; i++) {
      if (gcdArrayBigInt(a) % BigInt(primes[i]) !== 0n) {
        x = primes[i];
      }
    }

    console.log(parseInt(x));
  }
}

solve();
