// 브론즈 5
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

  const a = Number(input[0]);
  const b = Number(input[1]);
  
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }
  