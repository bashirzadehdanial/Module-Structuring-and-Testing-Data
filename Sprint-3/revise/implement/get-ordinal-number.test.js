// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback


function getOrdinalNumber(number) {
  if (number % 100 >= 11 && number % 100 <= 13) {
    return `${number}th`;
  }

  if (number % 10 === 1) {
    return `${number}st`;
  }
  if (number % 10 === 2) {
    return `${number}nd`;
  }
  if (number % 10 === 3) {
    return `${number}rd`;
  }

  return `${number}th`;
}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("converts 11 to an ordinal number", function () {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("converts 21 to an ordinal number", function () {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("converts 22 to an ordinal number", function () {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("converts 23 to an ordinal number", function () {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("converts 101 to an ordinal number", function () {
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("converts 112 to an ordinal number", function () {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("converts 1001 to an ordinal number", function () {
  expect(getOrdinalNumber(1001)).toEqual("1001st");
});