/*
Description:

You want to build a standard house of cards, but you don't know how many cards you will need. Write a program which will count the minimal number of cards according to the number of floors you want to have. For example, if you want a one floor house, you will need 7 of them (two pairs of two cards on the base floor, one horizontal card and one pair to get the first floor). Here you can see which kind of house of cards I mean: http://www.wikihow.com/Build-a-Tower-of-Cards

Details (Ruby & JavaScript)

The input must be an integer greater than 0, for other input raise an error.
*/

// My solution

function houseOfCards(floors){
  if (Number.isInteger(floors) && floors >= 1) {
    var currFloor = 2, total = 2;
    for (i = 1; i <= floors; i++) {
      currFloor += 3;
      total += currFloor;
    }
    return total;
  }
  else throw new Error('Whoops!');
}

// Cleverest solution

function houseOfCards(floors) {
  if (floors !== ~~floors || floors < 1) throw new Error()
  return (1.5 * floors + 2) * (floors + 1)
}