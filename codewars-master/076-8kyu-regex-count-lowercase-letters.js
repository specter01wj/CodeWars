/*
Your task is simply to count the total number of lowercase letters in a string.

Examples

lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

// My solution

function lowercaseCount(str){
  if (str === '') return 0;
  var lc = str.match(/[a-z]/g);
  return lc === null ? 0 : lc.length;
}

// Best-rated solution

function lowercaseCount(str){
  return (str.match(/[a-z]/g) || []).length
}