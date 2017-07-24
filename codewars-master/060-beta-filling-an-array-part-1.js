/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.
*/

function arr(n) {
  numbers = [];
  for (var i = 0; i < n; i++) {
    numbers.push(i);
  }
  return numbers;
}

// Best-rated solution

const arr = n => Array.from({length: n}, (_, i) => i);