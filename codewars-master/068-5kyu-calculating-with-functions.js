/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
*/

// My solution

var zero = n => (n ? eval('0'.concat(n)) : '0');
var one = n => (n ? eval('1'.concat(n)) : '1');
var two = n => (n ? eval('2'.concat(n)) : '2');
var three = n => (n ? eval('3'.concat(n)) : '3');
var four = n => (n ? eval('4'.concat(n)) : '4');
var five = n => (n ? eval('5'.concat(n)) : '5');
var six = n => (n ? eval('6'.concat(n)) : '6');
var seven = n => (n ? eval('7'.concat(n)) : '7');
var eight = n => (n ? eval('8'.concat(n)) : '8');
var nine = n => (n ? eval('9'.concat(n)) : '9');

var plus = n => '+'.concat(n);
var minus = n => '-'.concat(n);
var times = n => '*'.concat(n);
var dividedBy = n => '/'.concat(n);

// Best-rated solution

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }