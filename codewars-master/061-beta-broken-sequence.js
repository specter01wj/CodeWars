/*
You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

Note that the sequence may be with random order.

E.g.

findMissingNumber("1 3 2 5") // returns 4, because 4 is missing
findMissingNumber("1 2 3 4") // returns 0, because the sequence isn't broken
findMissingNumber("1 5") // returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4
*/

function findMissingNumber (str) {
  if (str == '') return 0;
  newArr = str.split(' ').sort((a,b) => a-b);
  for (var i = 0; i < newArr.length; i++) {
    if (!(+newArr[i] === i + 1)) return i + 1;  
  }
  return 0;
}