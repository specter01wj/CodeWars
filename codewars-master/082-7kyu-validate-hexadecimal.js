/*
Create a function to validate if a string is a valid hexadecimal.

Two patterns is valid

6 chars (ff00ff)
3 chars (f0f).
*/

// My solution

function isHex(str) {
  return /^[a-f\d]{3}$|^[a-f\d]{6}$/i.test(str);
}

// Best-rated solution

const isHex = (str) => /^([0-9a-f]{3}){1,2}$/i.test(str)

