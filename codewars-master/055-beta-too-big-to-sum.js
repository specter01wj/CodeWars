/*
JavaScript numbers have only enough storage space to represent 53 bit sized integers. This means any integer smaller than -2^53 and any integer larger than 2^53 might be rounded incorrectly. For example:

9007199254740993 === 9007199254740992 //true

Your task is to create a function which will return the sum of two given integers only when you are certain that the sum is correct. So, as long as the integers and their sum are never larger than 53 bits in magnitude, you must return the sum of the two given integers.

Anytime an integer with a magnitude larger than 53 bits is used your function must return false.

a and b will always be valid integers.
*/

// My solution

function certainSum(a, b){
  if (Math.abs(a) < Math.pow(2,53) && Math.abs(b) < Math.pow(2,53) && Math.abs(a+b) < Math.pow(2,53)) return a+b;
  else return false;
}

// Alternative solution

function certainSum(a, b) {
  return Math.abs(a) <= Number.MAX_SAFE_INTEGER && Math.abs(b) <= Number.MAX_SAFE_INTEGER && Math.abs(a + b) <= Number.MAX_SAFE_INTEGER ? a + b : false;
}