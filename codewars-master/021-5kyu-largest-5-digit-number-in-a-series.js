/*
In the following 6 digit number:

283910

91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

// My solution

function solution(digits) {
  var num = 0;
  for (i=0; i<= (digits.length-5); i++) {
    temp = +digits.slice(i,i+5)
    if (temp > num) num = temp;
  }
  return num;
}

// Best solution

function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}