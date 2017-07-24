/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Say that S(n) is the nth term of the above sum. So

S(0) = 1, S(1) = 1, S(2) = 2, ... , S(5) = 8

Could you give the sum S of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

S = S(0) + S(1) + ... + S(n) ?

Hint:

See Fibonacci sequence and beware of rather big n:-)

Ref:

http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

JS: Due to a misspelling in the reference solution for random tests, 
have an outer auxiliary function that calculates Fibonacci numbers, 
name this outer function fib. 
(More than 500 CW passed the kata so it is now impossible to change the random tests).
*/

// My solution (NB cannot use recursion)

function perimeter(n) {
  fibArray = [];
  for (var i=0; i<=n; i++) {
    fibArray.push(fib(i));
  }
  return 4 * fibArray.reduce(function(a, b) {
    return a + b;
  });
}

function fib(i) {
  if (i===0) return 1;
  if (i===1) return 1;
  var a = 1; var b = 1;
  for (var j=2; j<=i; j++) {
    var c = a + b;
    a = b; b = c;
  }
  return c;
}

// Best solution

function perimeter(n) {
  var a = 1;
  var b = 1;
  var c = a + b;
  var p = 16; // 4 + 4 + 8
  this.fib = function() {
    for (var i = 3; i <= n; i++) {
      a = b;
      b = c;
      c = a + b;
      p += c * 4;
    }
    return p;
  }
  return fib();
}

