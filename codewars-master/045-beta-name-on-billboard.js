/*
You can print your name on a billboard ad. Find out how much it will cost you. Each letter is £30.

You can not use multiplier "*" operator.
*/

function billboard (name) {
  let price = 0;
  for (let letter of name) {
    price += 30;
  }
  return price;
}