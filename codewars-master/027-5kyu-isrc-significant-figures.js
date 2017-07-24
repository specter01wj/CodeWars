/*
A crisis has broken out at the International Sheep Research Center (ISRC) in New Zealand. Sheep have been fed the wrong dosages of drugs and are dying in multitudes, affecting the economic (and romantic) well-being of New Zealand. After an investigation, your boss, Jack, has narrowed the problem down to incorrectly displayed dosage values.

Your task is to write a function that takes a number and returns it as a string representing the number rounded to the correct number of significant figures.

Jack is allergic to scientific (exponential notation), so all numbers will be written out in full.

All values passed in as numbers will be positive floating point or integer values. All values passed in for the count of significant figures will be integers of 1 and above.

Examples:

toSignificantFigures(3.14159,  3)
// returns "3.14"

toSignificantFigures(0.0012, 4)
// returns "0.001200"

toSignificantFigures(987654, 3)
// returns "988000"
*/

// My solution

function toSignificantFigures (number,count) {
  var rounded = number.toPrecision(count);
  if (/e/g.test(rounded))
    return Number(rounded.slice(0,-3) *
    Math.pow(10,rounded.slice(-1))).toString();
  else return rounded;
}

// Best solution

function toSignificantFigures2(n, c) {
  return n = n.toPrecision(c), /e/.test(n)? ""+ +(n) : n
}
