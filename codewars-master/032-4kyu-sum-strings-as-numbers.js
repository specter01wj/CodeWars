/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
C# sumStrings("1","2") // => "3"

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

// My solution

function sumStrings(str1, str2) {
  var temp = '', str3 = '', next = 0;
  str1 = str1.replace(/^0+/,'');
  str2 = str2.replace(/^0+/,'');
  if (str1.length > str2.length) str2 = [str1, str1 = str2][0];
  while (str1.length < str2.length) {
    str1 = '0' + str1;
  }
  for (var i = str1.length - 1; i >= 0; i--) {
    temp = parseInt(str1.substring(i,i+1)) + parseInt(str2.substring(i,i+1)) + next;
    str3 = (temp % 10).toString() + str3;
    next = temp <= 9 ? 0 : 1;
  }
  if (next === 1) str3 = next + str3;
  return str3;
}

// Best-voted solution 1

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

// Best-voted solution 2

function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}