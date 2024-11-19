const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(penceStringWithoutTrailingP);


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

/* 
1- const penceString = "399p": initialises a string variable with the value "399p"
2- const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1) : Removes the trailing "p" from the string, leaving "399".
3- const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") : Pads the string with leading zeros to ensure it's at least three digits long.
4- const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) : Extracts everything except the last two digits.
5- const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") : Extracts the last two digits for the pence and pads if necessary.
console.log(\£${pounds}.${pence}`) : Logs the formatted price in pounds and pence.

*/