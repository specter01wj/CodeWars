/*
Rules

You must check if some ticket numbers are valid. To be valid, a ticket number must :

Contain exactly 6 characters
Contain : one letter then one digit then 4 letters

'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

Input arguments

tickets : an array of string, representing ticket numbers

Return value

An integer representing the number of valid passwords.
*/

// My solution

var nbrValidTickets = tickets => tickets.reduce((count, ticket) => /^[a-z]\d[a-z]{4}$/i.test(ticket) ? count += 1 : count, 0);

// Alternative solution using the filter() method

function nbrValidTickets(tickets){
  var pReg = /^[a-z]\d[a-z]{4}$/i;
  return tickets.filter((val) => pReg.test(val)).length;
}