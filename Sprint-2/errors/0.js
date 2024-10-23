// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("danial"));



// The error occurred due to redeclaring the parameter str with let. The fix was to update str directly without redeclaring it.
