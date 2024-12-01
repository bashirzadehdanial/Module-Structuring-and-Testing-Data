// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
  if (num <= 1) {
    return false; 
  }

  if (num === 2) {
    return true; 
  }

  if (num % 2 === 0) {
    return false; 
  }

  const sqrtNum = Math.sqrt(num); 
  for (let i = 3; i <= sqrtNum; i += 2) { 
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}


test("checks if a number is prime", () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true); 
  expect(isPrime(5)).toBe(true); 
  expect(isPrime(7)).toBe(true); 
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(0)).toBe(false); 
  expect(isPrime(-5)).toBe(false); 
  expect(isPrime(25)).toBe(false); 
});

