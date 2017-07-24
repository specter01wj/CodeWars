/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

a = "56 65 74 100 99 68 86 180 90"ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/

// My solution

function orderWeight(str) {
  if (str === "") return "";
  array = str.split(" ").map(Number).sort();
  var unsorted = [], sorted = [], converted = [];
  for (i=0; i<array.length; i++) {
    unsorted[i] = digitSum(array[i]);
  }
  sorted = unsorted.concat().sort(function(a, b){return a-b;});
  for (i=0; i<array.length; i++) {
    converted[i] = array[unsorted.indexOf(sorted[i])];
    delete unsorted[unsorted.indexOf(sorted[i])];
  }
  return converted.join(" ");
}

function digitSum(num) {
  var sum = 0;
  while (num > 0) {
    sum += num%10;
    num = Math.floor(num/10);
  }
  return sum;
}

// Best solution

function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}