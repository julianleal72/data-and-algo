// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Example:
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) return true;
  else if (Math.abs(n) < 2) return false;
  if (n % 5 > 0 && n % 3 > 0 && n % 2 > 0) return false;
  let divideMe = n;
  let r = 0;
  while (r === 0) {
    r = divideMe % 5;
    console.log(r);
    if (Math.abs(r) === 0) divideMe /= 5;
  }
  console.log("past 5");
  r = 0;
  while (r === 0) {
    r = divideMe % 3;
    console.log(r);
    if (Math.abs(r) === 0) divideMe /= 3;
  }
  console.log("past 3");
  r = 0;
  while (r === 0) {
    r = divideMe % 2;
    console.log(r);
    if (Math.abs(r) === 0) divideMe /= 2;
  }
  console.log("past 2");
  if (divideMe === 1) return true;
  return false;
};
