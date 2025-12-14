const { log } = require("console");
const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
const AoCInput = readFile("./input-day2.txt");

let allRanges = AoCInput.split(",");
let result = 0;

allRanges.map((range) => {
  let [firstRange, secondRange] = range.split("-");
  let minNum = Number(firstRange);
  let maxNum = Number(secondRange);
  //console.log(minNum, maxNum);
  for (let i = minNum; i <= maxNum; i++) {
    let currentNum = String(i);
    if (currentNum.length % 2 === 1) {
      continue;
    }
    let firstHalf = currentNum.slice(0, currentNum.length / 2);
    let secondHalf = currentNum.slice(currentNum.length / 2);
    if (firstHalf === secondHalf) {
      result = result + i;
    }
  }
});
console.log(result);
