const fs = require("fs");

function solve() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let ptr = 0;
  const y = parseInt(input[ptr++], 10);

  let nextBeautifulYear = 0;

  // function for check beauty
  function checkBeautifulYear(year) {
    year = year.toString();
    let arr = [];
    for (let i = 0; i < year.length; i++) {
      if (arr.length === 0) {
        arr.push(year[i]);
      } else {
        if (!arr.includes(year[i])) {
          arr.push(year[i]);
        }
      }
    }
    if (arr.length === year.length) {
      return true;
    }
    return false;
  }

  // check year
  let solved = false;
  for (let i = y; !solved; i++) {
    if (checkBeautifulYear(i) && i !== y) {
      nextBeautifulYear = i;
      solved = true;
    }
  }

  // debug logs
  //   console.log(checkBeautifulYear(2020), y);

  // output
  console.log(nextBeautifulYear);
}

solve();
