const {getCardValue} = require("./get-card-value")


test("It should return 2 for 2♠", () => {
  expect(getCardValue("2♠")).toBe(2);
});

test("It should return 10 for 10♠", () => {
  expect(getCardValue("10♠")).toBe(10);
});

test("It should return 10 for J♠", () => {
  expect(getCardValue("J♠")).toBe(10);
});

test("should return 10 for Q♠", () => {
  expect(getCardValue("Q♠")).toBe(10);
});

test("should return 10 for K♠", () => {
  expect(getCardValue("K♠")).toBe(10);
});


test("should return 11 for A♠", () => {
  expect(getCardValue("A♠")).toBe(11);
});


