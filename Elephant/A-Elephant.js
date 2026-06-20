const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  // define result
  let STEPS = 0;

  // input
  let friendCoordinate = Math.floor(input[0]);

  // steps elephant can take
  const steps = [1, 2, 3, 4, 5];

  // calculate steps
  const totalFiveSteps = friendCoordinate / steps[4];
  if (!totalFiveSteps.toString().includes(".") || totalFiveSteps === 1) {
    STEPS = totalFiveSteps;
  } else {
    STEPS = Math.floor(totalFiveSteps) + 1;
  }

  // debug logs
  //   console.log(
  //     friendCoordinate,
  //     totalFiveSteps % 2 === 0,
  //     totalFiveSteps,
  //     (1.5).toString().includes("."),
  //   );

  // output
  console.log(STEPS);
}

solve();
