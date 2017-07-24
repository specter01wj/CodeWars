/*
A palindrome is word which reads the same backwards as it does forwards.

For example, pip is a palindrome, as pip backwards is still pip. kip, however, is not, for kip backwards is pik, not kip.

Write a function, palindrome, which returns true if the passed string is a palindrome, regardless of capitalisation, and false otherwise.
*/

const palindrome = (str) => (str.toLowerCase() == str.split('').reverse().join('').toLowerCase());
