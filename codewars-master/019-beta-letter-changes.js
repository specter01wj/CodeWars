/*
Welcome to this Kata. In this Kata you will be given a string. Your task is to replace every character with the letter following it in the alphabet (for example, "b" should be "c", "z" should be "a" and capital "Z" should be "A").

The test cases would not have any special symbols or numbers but it will have spaces. And the upper and lower cases should be retained in your output.

For Example:

letterChange('Lorem Ipsum')    // return Mpsfn Jqtvn
*/

// My solution

function letterChange (str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  strNew = "";
  for (i=0; i<str.length; i++) {
    if (str.substring(i,i+1) == ' ') {
      strNew = strNew.concat(' ');
    }
    else if (str.substring(i,i+1) == 'z') {
      strNew = strNew.concat('a');
    }
    else if (str.substring(i,i+1) == 'Z') {
      strNew = strNew.concat('A');
    }
    else {
      for (j=0; j<alphabet.length; j++) {
        if (alphabet.substring(j,j+1) == str.substring(i,i+1)) {
          strNew = strNew.concat(alphabet.substring(j+1,j+2));
        }
      }
    }
  }
  return strNew;
}

// Best solution

function letterChange(str) {
  return str.replace(/\w/g, function(c) {
      return String.fromCharCode(
          c.charCodeAt(0) + (c != "Z" && c != "z" ? 1 : -25));
  });
}