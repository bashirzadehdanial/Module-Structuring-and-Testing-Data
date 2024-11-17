// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hourString, minuteString] = time.split(":");
  let hours = Number(hourString)
  const minutes = minuteString ? minuteString : "00";
  
  

  if (hours === 0) {
    return `12:${minutes} am`; // Midnight
  } else if (hours === 12) {
    return `12:${minutes} pm` // Noon 
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm` // Afternoon
  } else {
    return `${hours}:${minutes} am` // Morning 
  }
}


const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "8:00 am";
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

let currentOutput3 = formatAs12HourClock("15:00");
let targetOutput3 = "3:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

let currentOutput4 = formatAs12HourClock("01:00");
let targetOutput4 = "1:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

let currentOutput5 = formatAs12HourClock("15:30");
let targetOutput5 = "3:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

let currentOutput6 = formatAs12HourClock("7:30");
let targetOutput6 = "7:30 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);




