const {rotateCharacter} = require("./rotate-char")

test("It should rotate the lowercase letter by shift positions within the lowercase alphabet ", () => {
  expect(rotateCharacter("a", 3)).toBe("d");
  expect(rotateCharacter("f", 1)).toBe("g");
});

test("It should rotate the uppercase letter by shift positions within the uppercase alphabet", () => {
  expect(rotateCharacter("A", 3)).toBe("D");
  expect(rotateCharacter("F", 1)).toBe("G");
});

test("It should return the character unchanged as the given character is not a letter", () => {
  expect(rotateCharacter("7", 5)).toBe("7");
});

test("It should rotate the character by shift positions within the alphabet while handling the wraparound", () => {
  expect(rotateCharacter("z", 1)).toBe("a");
  expect(rotateCharacter("Y", 2)).toBe("A");
});




