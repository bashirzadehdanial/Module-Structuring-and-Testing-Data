let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*Line 4: carPrice.replaceAll(",", "")
Line 5: priceAfterOneYear.replaceAll(",", "")
Line 4: Number(...) (for carPrice)
Line 5: Number(...) (for priceAfterOneYear)
Line 10: console.log(...)*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// There is a syntax error due to a missing comma in the replaceAll method call. To fix it, we can add a comma between the parameters: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// c) Identify all the lines that are variable reassignment statements

// Line 4 and 5

// d) Identify all the lines that are variable declarations

// Line 1, 2, 7, and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Convert a string representation of a price with commas into a numerical value for calculations. (replacing commoas with empty space)
