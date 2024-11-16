const {isProperFraction} = require("./is-proper-fraction")

test("Function should throw an error when the denominator is zero, as it's not a valid fraction", () => {
  expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
});



