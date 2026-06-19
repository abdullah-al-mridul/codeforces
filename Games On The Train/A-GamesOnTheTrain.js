const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  let t = parseInt(input[ptr++], 10);
  let outputs = [];

  for (let i = 0; i < t; i++) {
    let n = parseInt(input[ptr++], 10);
    let h = [];
    for (let j = 0; j < n; j++) {
      h.push(parseInt(input[ptr++], 10));
    }
    // console.log("heights", h);

    // find the largest tower
    const largestH = h.sort()[h.sort().length - 1];
    // console.log("largest tower", largestH);

    // increase largest tower with 1 , it will be targeted height for other towers
    const finalH = largestH + 1;
    // console.log("target", finalH);

    // check all tower and update maximum added height
    let MAX_H = 0;
    for (let towerIndex = 0; towerIndex < h.length; towerIndex++) {
      const C_VAL = finalH - h[towerIndex];
      if (MAX_H < C_VAL) {
        MAX_H = C_VAL;
      }
    }

    // console.log("max k for tower:", i, "   ", MAX_H);

    // get the max k
    const k = MAX_H;

    outputs.push(k);
  }

  console.log(outputs.join("\n"));
}

solve();
