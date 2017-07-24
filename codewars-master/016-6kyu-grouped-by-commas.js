/*
Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 1000000000

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

// My solution

function groupByCommas(n) {
  var str = n.toString();
  if (str < 1000) {
    return str;
  }
  else if (str >= 1000 && str < 1000000) {
    return str.slice(0, -3) + "," + str.slice(-3);
  }
  else if (str >= 1000000 && str < 1000000000) {
    return str.slice(0, -6) + "," + str.slice(-6, -3) + "," + str.slice(-3);
  }
  else if (str >= 1000000000 && str < 1000000000000) {
    return str.slice(0, -9) + "," + str.slice(-9, -6) + "," + str.slice(-6,-3) + "," + str.slice(-3);
  }
}

// Best solution

function groupByCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}