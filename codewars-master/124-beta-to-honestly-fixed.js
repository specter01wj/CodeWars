/*
In JavaScript, you can use the .toFixed() method to format a number using fixed point notation, and return the result as a string;

For example;

var num = 2016.2326;
num.toFixed());   // returns '2016'
num.toFixed(1));  // returns '2016.2'
num.toFixed(2));  // returns '2016.23'
num.toFixed(3));  // returns '2016.233'

Notice that in the last example, the third decimal digit is rounded up, so the method works by rounding up the last digit if the following digit is equal or greater than 5.

Your task is to write an 'honest' toFixed method, called toHonestlyFixed, that when called behaves in the same way as toFixed, but without rounding up.

The method should be added as a Number prototype.

For example;

var num = 9434.3689;
num.toHonestlyFixed(1);  // should return '9434.3'
num.toHonestlyFixed(2);  // should return '9434.36'
num.toHonestlyFixed(3);  // should return '9434.368'

For all other purposes, toHonestlyFixed should behave in this way;

Accepts a number argument to represent the number of digits to appear after the decimal (between 0-10), otherwise throws a range error with any message you choose. For example;
var num = 3333;
num.toHonestlyFixed(-2);  // 'RangeError: toHonestlyFixed() digits argument must be between 0 and 10'

If the number argument is greater than the number of decimal digits present, zeros are used as padding. For example;
var num = 3333;
num.toHonestlyFixed(4);  // should return '3333.0000'

If the number argument is undefined/empty, 0 is used as the argument.

If the number passed in is not a valid number, a TypeError is thrown. This also means that you can't pass in a string with a number (e.g '20304'.toHonestlyFixed() will not work). You may pass in 0 as a number.

Note that toFixed() allows up to 20 decimal places, but for this exercise simply allow up to 10 decimal places.

Also note that numbers tested against will NOT be large floating point values, they will be between 0.0000001 and 9999999.9999999. This is because this kata does not test your ability to deal with converting large numbers, just modifying toFixed so it doesn't round up.

Good luck!
*/

// My solution

Number.prototype.toHonestlyFixed = function(num=0) {
  if (num < 0 || num > 10) throw Error; 
  if (num === 0) return this.toString().split('.')[0];
  return this.toFixed(num+1).slice(0,-1);
};

// Alternative solution

Number.prototype.toHonestlyFixed = function (p = 0) {
  if (p > 10) throw "up";
  return (Math.trunc(this * Math.pow(10, p)) / Math.pow(10, p)).toFixed(p);
}