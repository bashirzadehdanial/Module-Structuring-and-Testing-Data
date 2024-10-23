// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// It has a return statement immediately followed by a semicolon. As a result, the function will terminate at the return statement without executing the subsequent line, which means it does not return a value.
// The sum(10, 32) function call will execute first, but since the function does not return a value, it returns undefined. 
//The output will be: console.log("The sum of 10 and 32 is undefined");
