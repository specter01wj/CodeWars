/*
For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g.,

lastDigit([3, 4, 2]) === 1

because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
*/

// My solution

function lastDigit (arr){
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0] % 10;
  var last =  arr[arr.length-1] === 0 ? 1 : Math.pow(arr[arr.length-2] % 10, arr[arr.length-1] % 100 % 4 + 4) % 100;
  if (last === 0) last = 100;
  arr = arr.slice(0,-2); arr.push(last);
  return lastDigit(arr);
}

// Reformatted

function lastDigit (arr){
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0] % 10;
  var last =  arr[arr.length-1] === 0 ? 1 : Math.pow(arr[arr.length-2] % 100, arr[arr.length-1] % 4 + 4);
  arr = arr.slice(0,-2); arr.push(last);
  return lastDigit(arr);
}

// Alternative solution

function lastDigit(as){
  if(as.length === 0){return 1;}
  if(as.length === 1){return as[0] % 10}
  let nums = as.slice(-2);
  let base = nums[0];
  let exp = nums[1];
  let lastDig = Math.pow((base % 10), ((exp % 4) + 4)) % 10;
  if(base == 0 && exp === 0){lastDig = 1}
  if(as.length <= 2){return lastDig;}
  let modFour = Math.pow((base % 4), ((exp % 20) + 4)) % 4;
  if(base == 0 && exp === 0){modFour = 1}
  let arr = as.slice(0, -2);
  arr.push(modFour);
  return lastDigit(arr);
}