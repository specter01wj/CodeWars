/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

// My solution

function permutations (str){
  let arr = str.split(''), perms = [], rest, picked, restPerms, curr;
  if (arr.length === 0) return [str]; 
  for (var i = 0; i < arr.length; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1)[0];
    restPerms = permutations (rest.join(''));   
    for (var j = 0; j < restPerms.length; j++) {
      if (perms.indexOf(curr = picked + restPerms[j]) < 0) perms.push(curr);
    }
  }  
  return perms;
}

// Best-rated solution

function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}