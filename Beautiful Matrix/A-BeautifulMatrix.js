const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let rowOfOne = 0;
  let colOfOne = 0;

  let index = 0;
  for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
      let val = parseInt(input[index++], 10);
      if (val === 1) {
        rowOfOne = r;
        colOfOne = c;
      }
    }
  }

  let minMoves = 0;

  // center of cols and rows
  const centerOfRows = 3;
  const centerOfCols = 3;

  // steps to move
  const stepsForCol = Math.abs(centerOfCols - colOfOne);
  const stepsForRow = Math.abs(centerOfRows - rowOfOne);

  // minimum steps to centerize 1
  minMoves = stepsForCol + stepsForRow;

  //   console.log(rowOfOne, colOfOne, stepsForCol, stepsForRow);

  console.log(minMoves);
}

solve();
