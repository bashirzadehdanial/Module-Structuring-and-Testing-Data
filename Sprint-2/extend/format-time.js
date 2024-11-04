// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours === 0) {
    return `12:00 am`; // Midnight
  } else if (hours === 12) {
    return `12:00 pm`; // Noon 
  } else if (hours > 12) {
    return `${hours - 12}:00 pm`; // Afternoon
  } else {
    return `0${hours}:00 am`; // Morning 
  }
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput0 = formatAs12HourClock("23:00");
const targetOutput0 = "11:00 pm";
console.assert(
  currentOutput0 === targetOutput0,
  `current output: ${currentOutput0}, target output: ${targetOutput0}`
);

let currentOutput1 = formatAs12HourClock("00:00");
let targetOutput1 = "12:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);

let currentOutput2 = formatAs12HourClock("12:00");
let targetOutput2 = "12:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
