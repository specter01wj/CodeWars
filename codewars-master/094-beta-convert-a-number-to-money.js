/*
Simplified number to money converter.

You will always get a positive number below 10,000 with at least two trailing digits.

Note: You do not need to round the number, just truncate to 2 decimal places.

Examples:

2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)
*/

// My solution

var numberToMoney = function(n) {
  return (n+'').replace(/(\d{1,2})\d{3}\./, (a,x) => a.replace(x, x+','))
               .replace(/\.\d{2}(\d+)/, (a,x) => a.replace(x,''))
               .replace(/0+$/,'');
};

// Best-rated solution

function numberToMoney(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}