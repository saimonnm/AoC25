const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
const AoCInput = readFile("./input.txt");

let rotations = AoCInput.split("\n");
let count = 0;
let dial = 50;
let quotient = 0;

rotations.forEach((code) => {
  if (code.startsWith("L")) {
    if (dial === 0) {
      count--;
    }
    let newNum = Number(code.replace("L", ""));
    dial = dial - newNum;
  } else if (code.startsWith("R")) {
    let newNum = Number(code.replace("R", ""));
    dial = dial + newNum;
  }

  if (dial % 100 === 0) {
    count++;
  }

  quotient = Math.floor(dial / 100);
  dial = dial % 100;
  if (dial < 0) {
    dial += 100;
  }
  if (dial === 0 && quotient > 0) {
    count--;
  }
  count += Math.abs(quotient);
  console.log("dial:", dial);
  console.log("count:", count);
});

console.log(count);
