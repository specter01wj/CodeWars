/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum. For example, when n = 10:

1**2 + 2**2 + ... + 10**2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)**2 = 55**2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Example (Ruby)

difference_of_squares(10)
# => 2640
*/

function differenceOfSquares(x){
  var sumOfSquares = 0, sum = 0;
  for (i=0; i<=x; i++) {
    sumOfSquares += Math.pow(i,2);
    sum += i;
  }
  return Math.pow(sum,2) - sumOfSquares;  
}