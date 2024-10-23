// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  console.log(decimalNumber);

  return percentage;
}

convertToPercentage(2.55)



// Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared
// To fix this, I should remove the redeclaration

// The second issue is: ReferenceError: decimalNumber is not defined
/*
The console.log(decimalNumber); statement outside the function tries to log the decimalNumber variable, which is not defined in that scope. 
This leads to a ReferenceError indicating that decimalNumber is not recognised outside the function. 
 */ 
// // To fix this, I should remove the log or put it in the scop.
