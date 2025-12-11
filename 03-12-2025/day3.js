const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
const AoCInput = readFile("./input-day3.txt");
let banks = AoCInput.split("\n");
let result = 0;

banks.map((bank) => {
  let splittedBank = bank.trim().split("").map((battery) => Number(battery));
  //  console.log(splittedBank);
  let maxNumbers = [0, 0];
  let maxIndex = 0;
  splittedBank.forEach((el, index) => {
    if (el > maxNumbers[0]) {
      maxIndex = index;
      maxNumbers[0] = el;
    }
  });

  if (maxIndex !== splittedBank.length - 1) {
    splittedBank.slice(maxIndex + 1).forEach((el) => {
      if (el > maxNumbers[1]) {
        maxNumbers[1] = el;
      }
    });
  } else if (maxIndex === splittedBank.length - 1) {
    maxNumbers[1]=maxNumbers[0]
    maxNumbers[0]=0
    splittedBank.slice(0, -1).forEach((el) => {
      if (el > maxNumbers[0]) {
        maxNumbers[0] = el;
      }
    });
  }

  let bankResult = String(maxNumbers[0]) + String(maxNumbers[1]);
  console.log(bankResult);

  result = result + Number(bankResult);
});
console.log(result);
