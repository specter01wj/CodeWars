/*
Kontti language is a finnish word play game, you add -kontti to the end of a word and then switch their first letters until the first vowel.

For example the word lamppu becomes komppu-lantti.

For now this will only be tested with words where the first vowel in the secont character.

Write a string method that turns a sentence into a kontti sentence!
*/

String.prototype.kontti = function(){
  return this.split(' ').map(word => `ko${word.slice(2,word.length)} ${word.slice(0,2)}ntti`).join(' ');
};