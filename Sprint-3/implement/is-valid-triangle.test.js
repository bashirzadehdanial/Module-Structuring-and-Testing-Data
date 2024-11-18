const { isValidTriangle } = require("./is-valid-triangle");

test("It should return true, if sum of two sides of the triangle is greater than the third side", () => {
  expect(isValidTriangle(3, 3, 3)).toEqual(true);
});

test("It should return false, if sum of two sides of the triangle is smaller than the third side", () => {
  expect(isValidTriangle(2, 2, 6)).toEqual(false);
});

test("It should return false, if any of the length be a negative number", () => {
  expect(isValidTriangle(-1, 2, 6)).toEqual(false);
});
