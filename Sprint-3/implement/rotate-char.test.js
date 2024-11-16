const {rotateCharacter} = require("./rotate-char")

test("It should rotate the lowercase letter by shift positions within the lowercase alphabet ", () => {
  expect(rotateCharacter("a", 3)).toBe("d");
  expect(rotateCharacter("f", 1)).toBe("g");
});

test("It should rotate the uppercase letter by shift positions within the uppercase alphabet", () => {
  expect(rotateCharacter("A", 3)).toBe("D");
  expect(rotateCharacter("F", 1)).toBe("G");
});




