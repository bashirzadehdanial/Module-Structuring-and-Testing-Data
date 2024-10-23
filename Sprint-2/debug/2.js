// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


/* 
The original getLastDigit function always returned the last digit of the constant num 103 instead of the input number. 
I fixed it by changing the function to accept num as a parameter, allowing it to return the last digit of any number passed to it.
 */