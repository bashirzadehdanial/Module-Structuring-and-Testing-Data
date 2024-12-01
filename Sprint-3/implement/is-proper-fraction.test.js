const {isProperFraction} = require("./is-proper-fraction")

test("Function should throw an error when the denominator is zero, as it's not a valid fraction", () => {
  expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
});

test("Function should return false if denominator is equal to numerator, because it is not a proper fraction", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});

test("Function should return true if numerator is smaller than denumerator, because it is a proper fraction", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

test("Function should return true if numerator is greater than denumerator, because it is a proper fraction", () => {
  expect(isProperFraction(4, 3)).toBe(false);
});

test("Function should throw an error when the input is a negative value", () => {
  expect(() => isProperFraction(-4, 3)).toThrow("Negative value is not acceptable");
});
