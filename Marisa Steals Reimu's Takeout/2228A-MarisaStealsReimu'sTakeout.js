const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;

  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let pointer = 0;
  const t = parseInt(input[pointer++], 10);

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[pointer++], 10);
    let w = [];

    for (let j = 0; j < n; j++) {
      w.push(parseInt(input[pointer++], 10));
    }

    let x = 0;

    let two = [];
    let one = [];
    let zero = [];

    for (let i = 0; i < n; i++) {
      if (w[i] === 0) {
        zero.push(0);
      }

      if (w[i] === 1) {
        one.push(1);
      }
      if (w[i] === 2) {
        two.push(2);
      }
    }

    let oneCount;
    let twoCount;
    if (one.length > 0 || two.length > 0) {
      if (two.length > one.length) {
        twoCount = two.length - one.length;
        x = x + one.length + zero.length + Math.floor(twoCount / 3);
      }
      if (two.length < one.length) {
        oneCount = one.length - two.length;
        x = two.length + zero.length + Math.floor(oneCount / 3);
      }
      if (two.length === one.length) {
        x = x + zero.length + two.length;
      }
    } else {
      x = zero.length;
    }

    console.log(x);
  }
}

solve();
