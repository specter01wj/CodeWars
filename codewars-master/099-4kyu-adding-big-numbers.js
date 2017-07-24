/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99"); -> "110"

Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

// My solution

function add(str1, str2) {
  var temp = '', str3 = '', next = 0;
  str1 = str1.replace(/^0+/,'');
  str2 = str2.replace(/^0+/,'');
  if (str1.length > str2.length) str2 = [str1, str1 = str2][0];
  while (str1.length < str2.length) {
    str1 = '0' + str1;
  }
  for (var i = str1.length - 1; i >= 0; i--) {
    temp = parseInt(str1.substring(i,i+1)) + parseInt(str2.substring(i,i+1)) + next;
    if (temp <= 9) {
      str3 = temp.toString() + str3;
      next = 0;
    } else {
      str3 = temp.toString().substring(1,2) + str3;
      next = 1;
    }
  }
  if (next === 1) str3 = next + str3;
  return str3;
}

// Cleverest solution

function add(a, b) {
  var carry = 0, result = [],
      len = Math.max(a.length, b.length), i = len;
  while (i--) {
    var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}