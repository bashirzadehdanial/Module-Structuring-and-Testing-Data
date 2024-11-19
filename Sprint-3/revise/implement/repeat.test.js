// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.


function repeat(str, count) {
  
  if (count < 0) {
    throw new Error("Negative counts are not valid.");
  }

 
  if (count === 0) {
    return "";
  }

  if (count === 1) {
    return str;
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}


  test("should repeat the string count times", () => {
    expect(repeat("abc", 3)).toBe("abcabcabc");
  });

  test("should return the original string if count is 1", () => {
    expect(repeat("abc", 1)).toBe("abc");
  });

  test("should return an empty string if count is 0", () => {
    expect(repeat("abc", 0)).toBe("");
  });

  test("should throw an error if count is negative", () => {
    expect(() => repeat("abc", -1)).toThrow("Negative counts are not valid.");
  });

  test("should handle repeating an empty string", () => {
    expect(repeat("", 5)).toBe("");
  });

