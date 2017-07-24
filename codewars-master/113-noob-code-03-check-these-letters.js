/*
Write a function that checks if the letters in the second string are present in the first:

letterCheck(["trances", "nectar"]) // true
letterCheck(["compadres", "DRAPES"]) // true
letterCheck(["parses", "parsecs"]) //false

Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.
*/

// My solution

function letterCheck(arr) {
  return arr[1].toLowerCase().split('').every(x => arr[0].toLowerCase().indexOf(x) >= 0);
}

// Best-rated solution

const letterCheck=(arr)=>!new RegExp("[^"+arr[0]+"]", "gi").test(arr[1]);