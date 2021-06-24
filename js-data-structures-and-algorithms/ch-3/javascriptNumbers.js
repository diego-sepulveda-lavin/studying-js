// Here are number operators in JS

/* 
+ : addition
- : subtraction
/ : division
* : multiplication
% : remainder
 */

// Js uses a 32-bit-floatin-point representation for numbers

console.log(0.1 + 0.2 === 0.3); //prints false due to finite amount of bits to represent floating point numbers

// Integer Rounding
console.log(5 / 4); // prints 1.25

/* 
Math.floor - rounds down to nearest integer
Math.round - rounds to nearest integer
Math.ceil  - rounds up to nearest integer
*/

console.log(Math.floor(0.9)); // prints 0
console.log(Math.floor(1.1)); // prints 1

console.log(Math.round(0.49)); // prints 0
console.log(Math.round(0.5)); // prints 1
console.log(Math.round(2.9)); // prints 3

console.log(Math.ceil(0.9)); // prints 1
console.log(Math.ceil(1.1)); // prints 2
console.log(Math.ceil(21)); // prints 21
console.log(Math.ceil(21.1)); // prints 22

// Number Epsilon
// Returns the smallest interval between two representable numbers useful for floating-point approximation
console.log(Number.EPSILON);

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

/* This function works by checking whether the difference between the two numbers
are smaller than Number.EPSILON. Remember that Number.EPSILON is the smallest
difference between two representable numbers. The difference between 0.1+0.2 and 0.3
will be smaller than Number.EPSILON. */

console.log(numberEquals(0.1 + 0.2, 0.3)); // prints true

//Maximums
// Number.MAX_SAFE_INTEGER returns the largest integer.
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // prints true due it cannot go higher

// it does not work for floating-points decimals
console.log(Number.MAX_SAFE_INTEGER + 1.1 === Number.MAX_SAFE_INTEGER + 2.2); // prints false

//Number.MAX_VALUE returns the largest floating-point number possible.
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // prints true due it cannot go higher
console.log(Number.MAX_VALUE + 1.1 === Number.MAX_VALUE + 2.2); // prints true due it cannot go higher

// Minimums
// Number.MIN_SAFE_INTEGER returns the smallest integer.
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // prints true due it cannot go lower

// it does not work for floating-points decimals
console.log(Number.MIN_SAFE_INTEGER - 1.1 === Number.MIN_SAFE_INTEGER - 2.2); // prints false

//Number.MAX_VALUE returns the largest floating-point number possible.
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE - 1 == -1); // true This is because this is similar to writing 0 - 1 == -1.

// Infinity
// The only greater thing than Number.MAX_VALUE is Infinity and the only smaller thing than Number.MAX_SAFE_INTEGER is -Infinity
console.log(Infinity > Number.MAX_VALUE);
console.log(-Infinity < Number.MIN_SAFE_INTEGER);
console.log(-Infinity - 32323323 == -Infinity - 1); //true This evaluates to true because nothing can go smaller than -Infinity.

// Size Summary
console.log(
  -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity,
  "SUMMARY"
);

// Number Algorithms
// Check if a number is a Prime Number (2, 3, 5, 7, 11, 13, 17, 19,...)
// Prime numbers are special numbers, greater than 1, that have exactly two factors, themselves and 1.

// Primality Test
// A primality test can be done by iterating from 2 to n, checking whether modulus division (remainder) is equal to zero.
/* 
5 % 2 = 1
5 % 3 = 2
5 % 4 = 1

6 % 2 = 0
6 % 3 = 0
6 % 4 = 2
6 % 5 = 1 
*/

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n-1
  for (let i = 2; i < n; i++) {
    // Time Complexity O(n)
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Let's Improve it
// Here we have some prime numbers
// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
// All prime numbers are of the form (6*x +- 1)
// Example 5 = 6 * 1 - 1, 7 = 6 * 1 + 1, 11 = 6 * 2 - 1, 13 = 6 * 2 + 1

function isPrimeImproved(n) {
  if (n <= 1) return false;

  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
  //Time Complexity: O(sqrt(n))
}

console.time("basic");
isPrime(23415112331);
console.timeEnd("basic");

console.time("improved");
isPrimeImproved(23415112331);
console.timeEnd("improved");

// Prime Factorization
// Prime numbers are basis of encryption and hashing and Prime Factorization is the process to determine which prime numbers multiply
// to a given number. Example Given 10 , it should print 5 and 2
function primeFactors(n) {
  // print the number of 2's that divide n
  while (n % 2 === 0) {
    console.log(2);
    n = n / 2;
  }

  // n must be odd at this point. So we can skip one element (Note i = i +2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  // This condition is to handle the case when n is a prime number greater than 2
  if (n > 2) {
    console.log(n);
  }
}

primeFactors(10); // prints 2 and 5 and Time Complexity: O(sqrt(n))

// Random Number Generator
// Important to simulate conditions. JS has a built-in to generate random Numbers: Math.random()
// Math.random() returns a float between 0 and 1(excluded)
// To get random numbers greater than 1, we can multiply by the range, and also add or subtract to modify the base

console.log(Math.random() * 100); // random float number between 0 and 99.99
console.log(Math.random() * 25 + 5); // random float number between 5 and 29.99
console.log(Math.random() * 10 - 100); // random float number between -100 and -90.01

// To get random integers we can use Math.floor, Math.round or Math.ceil to round to an integer
console.log(Math.floor(Math.random() * 100)); // random integer between 0 and 99
console.log(Math.round(Math.random() * 25) + 5); // random integer between 5 and 30
console.log(Math.ceil(Math.random() * 10) - 100); // random integer between -100 and -90
