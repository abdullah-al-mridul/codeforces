const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let k = parseInt(input[ptr++], 10);
  let n = parseInt(input[ptr++], 10);
  let w = parseInt(input[ptr++], 10);

  // define result
  let borrow = 0;

  // calculate load money , banana price i*k
  let totalPrice = 0;
  for (let i = 0; i < w; i++) {
    totalPrice = totalPrice + (i + 1) * k;
  }
  borrow = totalPrice - n;
  if (borrow < 1) {
    borrow = 0;
  }

  // debug logs
  //   console.log(
  //     "price of first banana :",
  //     k,
  //     "base money :",
  //     n,
  //     "wanted to buy :",
  //     w,
  //     "total price :",
  //     totalPrice,
  //   );

  // output
  console.log(borrow);
}

solve();
