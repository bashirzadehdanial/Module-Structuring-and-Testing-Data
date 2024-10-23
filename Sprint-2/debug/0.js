// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//The code logs 320 from multiply(10, 32), because it’s inside the template literal ${}, but the final output is The result of multiplying 10 and 32 is undefined because the function doesn't return a value, only logs it.
