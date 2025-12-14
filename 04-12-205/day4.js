const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
const AoCInput = readFile("./input4.txt");

let arr = AoCInput.split("\r\n");
let newArr = arr.map((row) => row.split(""));
let totRolls = 0;

//console.log(newArr);

for (let x = 0; x < newArr.length; x++) {
  for (let y = 0; y < newArr[x].length; y++) {
    let currentRolls = 0;
    if (newArr[x][y] !== "@") {
      continue;
    }
    if (x > 0 && newArr[x - 1][y] === "@") {
      currentRolls++;
    }
    if (x > 0 && y > 0 && newArr[x - 1][y - 1] === "@") {
      currentRolls++;
    }
    if (x > 0 && y < newArr[x].length - 1 && newArr[x - 1][y + 1] === "@") {
      currentRolls++;
    }
    if (y > 0 && newArr[x][y - 1] === "@") {
      currentRolls++;
    }
    if (y < newArr[x].length - 1 && newArr[x][y + 1] === "@") {
      currentRolls++;
    }
    if (x < newArr.length - 1 && newArr[x + 1][y] === "@") {
      currentRolls++;
    }
    if (y > 0 && x < newArr.length - 1 && newArr[x + 1][y - 1] === "@") {
      currentRolls++;
    }
    if (
      x < newArr.length - 1 &&
      y < newArr[x].length - 1 &&
      newArr[x + 1][y + 1] === "@"
    ) {
      currentRolls++;
    }
    if (currentRolls < 4) {
      totRolls++;
    }
  }
}
console.log(totRolls);
