function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable starts at 0 and is incremented by 1 with every iteration of the while loop.
// Each time the loop runs, index increases by 1, so that it checks each subsequent character of the string until it finds a match or reaches the end of the string.

// b) What is the if statement used to check
// The if statement checks if the current character matches the target, and if Yes, returns the current index, therefore allowing the function to stop early.

// c) Why is index++ being used?
// It increments the value of index by 1 after each iteration of the while loop.
// This ensures that the next character in the string is checked. 
// Without incrementing index, the loop would get stuck at the same character and never progress to the next one.

// d) What is the condition index < str.length used for?
// It ensures that the loop will only continue as long as index is within the length of the string. 
// Once index becomes greater than the length of the string, the loop will stop.
