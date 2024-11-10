// Credit Card Validator

// In this project you'll write a script that validates whether or not a credit card number is valid.

// Number must be 16 digits, all of them must be numbers.
// You must have at least two different digits represented (all of the digits cannot be the same).
// The final digit must be even.
// The sum of all the digits must be greater than 16.

/*
For example, the following credit card numbers are valid:

9999777788880000
6666666666661666


And the following credit card numbers are invalid:


a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)

*/



// Make a JavaScript file with a name that describes its contents.
// Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
// Write at least 2 comments that explain to others what a line of code is meant to do.
// Return a boolean from the function to indicate whether the credit card number is valid.


// Function to validate a credit card number
function isValidCreditCard(cardNumber) {
  // Check if the card number has exactly 16 digits
  if (cardNumber.length !== 16) {
    return false; // Invalid if not exactly 16 digits
  }

  // Check if the card number consists only of digits
  if (!/^\d{16}$/.test(cardNumber)) {
    return false; // Invalid if not all digits
  }

  // Check if there are at least two different digits in the card number
  let hasDifferentDigit = false;
  for (let i = 1; i < cardNumber.length; i++) {
    if (cardNumber[i] !== cardNumber[0]) {
      hasDifferentDigit = true;
      break; // Exit loop early if a different digit is found
    }
  }
  if (!hasDifferentDigit) {
    return false; // Invalid if all digits are the same
  }

  // Check if the last digit is even
  if (parseInt(cardNumber[15]) % 2 !== 0) {
    return false; // Invalid if last digit is odd
  }

  // Check if the sum of all digits is greater than 16
  let sum = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    sum += parseInt(cardNumber[i]);
  }
  if (sum <= 16) {
    return false; // Invalid if sum of digits is 16 or less
  }


  // If all conditions are met, the card number is valid
  return true;
}


test("valid credit card with 16 digits, at least two different digits, even last digit, and sum > 16", () => {
  expect(isValidCreditCard("9999777788880000")).toBe(true);
});

test("invalid credit card with non-numeric characters", () => {
  expect(isValidCreditCard("a92332119c011112")).toBe(false);
});

test("invalid credit card with only one type of digit", () => {
  expect(isValidCreditCard("4444444444444444")).toBe(false);
});

test("invalid credit card with sum of digits less than or equal to 16", () => {
  expect(isValidCreditCard("1111111111111110")).toBe(false);
});

test("invalid credit card with odd last digit", () => {
  expect(isValidCreditCard("6666666666666661")).toBe(false);
});

test("invalid credit card with length not equal to 16 digits", () => {
  expect(isValidCreditCard("123456789012345")).toBe(false); 
  expect(isValidCreditCard("12345678901234567")).toBe(false); 
});

test("invalid credit card with all digits the same", () => {
  expect(isValidCreditCard("1111111111111111")).toBe(false);
});

