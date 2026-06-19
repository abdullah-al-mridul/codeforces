const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let M = parseInt(input[0], 10);
  let N = parseInt(input[1], 10);

  let MAX_DOMINO = 0;

  const totalBoxs = M * N;

  //   console.log("total boxes ", totalBoxs);

  const dominoArea = 2 * 1;

  // calculate roughly
  const totalDomino = totalBoxs / dominoArea;

  // calculate maximum domino fit in the board , reducing fraction because we are not approved to cut a domino card
  MAX_DOMINO = Math.floor(totalDomino);

  // output
  console.log(MAX_DOMINO);
}

solve();
