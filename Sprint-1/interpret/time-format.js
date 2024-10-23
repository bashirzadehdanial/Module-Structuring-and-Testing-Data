const movieLength = -4444; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const MovieDuration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(MovieDuration);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variables declarations, including movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// only one, which is console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
//The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. This represents the number of remaining seconds after converting the total movie length into minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This calculates the total number of complete minutes in the movie. It first subtracts the remainingSeconds from movieLength to get the total seconds that can be divided into minutes, then divides that number by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The result represents the total duration of the movie in hours, minutes, and seconds. A better name for this variable could be MovieDuration which clearly describes its purpose.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all non-negative, negative, and zero.
