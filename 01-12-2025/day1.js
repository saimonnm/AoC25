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
//console.log(AoCInput);

/* foreach elemento di rotations[] --> se  
 if code startsWith==='L' allora sottrai il numero dopo
 if code startsWith==='R' allora somma il numero dopo
*/
let rotations = AoCInput.split("\n");
let count = 0;
let dial = 50;

rotations.forEach((code) => {
  if (code.startsWith("L")) {
    let newNum = Number(code.replace("L", ""));
    dial = dial - newNum;
  } else if (code.startsWith("R")) {
    let newNum = Number(code.replace("R", ""));
    dial = dial + newNum;
  }

  if (dial % 100 === 0) {
    count++;
  }
});
console.log(count);
