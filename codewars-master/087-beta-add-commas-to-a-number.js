/*
Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

You can be passed both positive and negative numbers.

For example:

commas(1) == "1"

commas(1000) == "1,000"

commas(100.2346) == "100.235"

commas(1000000000.23) == "1,000,000,000.23"

commas(-1) == "-1"

commas(-1000000.123) == "-1,000,000.123"
*/

// My solution

function commas(num){
  if (num.toString().match(/\.\d{4}/)) num = (Math.round(num*1000)/1000).toString().replace(/0+$/,'');
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Best-rated solution

function commas(num){
  let [left,right] = ((Math.round(num*1e3)/1e3)+".").split(".");
  left = left.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  return right.length ? left+"."+right : left
}