const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;

  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  console.log("Input :", input);

  let t = parseInt(input[0], 10);
  let ptr = 1;
  let outputs = [];

  for (let i = 0; i < t; i++) {
    let x = parseInt(input[ptr++], 10);
    let y = parseInt(input[ptr++], 10);
    console.log(x, y);

    if (x % 2 === 0 || y % 2 === 0) {
      // one of the cordinate is even here

      // testing
      //   isXEven = x % 2 === 0;
      //   isYEven = y % 2 === 0;
      //   console.log("long step or short step", x, y);
      //   console.log("x", isXEven, "y", isYEven);

      // output - possible because one of them is odd or both even
      outputs.push("YES");
    } else {
      // all cordinates are odd here
      //   console.log("odd", x, y);

      // output - note possible
      outputs.push("NO");
    }
  }

  console.log(outputs.join("\n"));
}

solve();
