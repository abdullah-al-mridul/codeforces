const fs = require("fs");

function main() {
  const source = fs.existsSync("input.txt") ? "input.txt" : 0;
  const input = fs.readFileSync(source, "utf-8").trim().split("\n");
  if (input.length === 0 || input[0] === "") return;
  const t = parseInt(input[0].trim(), 10);
  let currentLine = 1;
  for (let i = 0; i < t; i++) {
    const word = input[currentLine].trim().split("");
    currentLine++;

    if (word[word.length - 1] === "s" && word[word.length - 2] === "u") {
      word.pop();
      if (word.length > 0) {
        word[word.length - 1] = "i";
      } else {
        word[0] = "i";
      }
    }

    console.log(word.join(""));
  }
}

main();
