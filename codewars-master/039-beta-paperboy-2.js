/*
All of sudden you and Stripes find yourselves in a sticky situation. Your paper drop business has grown to the point where it's too much for just Stripes and you to handle. Simply, there are just too many houses and not enough of you. Since your job is to make sure the business runs smoothly, it's up to you to find a solution.

Create an object with a method that returns how many paperboys you need to hire to get the job done in the set amount of time. Remember you and Stripes are already a team of two so you need to return how many extra hands are needed.

You'll be passed four arguments. A neighbourhood, the number of houses to deliver to in that neighbourhood, the amount of time it takes one paperboy to deliver to 50 houses (in minutes), and the time in hours to complete the job.

In this example you have 400 houses to deliver to in Brooklyn Heights. It takes one paperboy (or papergirl) 30 minutes to deliver to 50 houses and you have one hour to complete the job.

var route1 = new Route("Brooklyn Heights", 400, 30, 1); 
route1.paperboysNeeded() //should return "2 paperboys needed for Brooklyn Heights"

In this example you have 100 houses in Highland Park, it takes you 15 minutes to deliver to 50 houses and you have 15 minutes to complete the job.

var route14 = new Route("Highland Park", 100, 15, .25); 
route14.paperboysNeeded() //should return "You and Stripes can handle the work yourselves"

NOTE: REMEMBER THAT A PAPERBOY CAN ONLY DROP WHOLE PAPERS AND NOT FRACTIONS OF A PAPER
*/

function Route(nhood, numHouses, per50, delTime) {
  this.paperboysNeeded = function() {
    var boys = Math.ceil(numHouses / Math.floor(delTime * 60 / per50 * 50) - 2);
    return (boys <= 0) ? "You and Stripes can handle the work yourselves" :
    boys + " paperboy" + ((paperboys > 1) ? 's' : '') + " needed for " + nhood;
  };
}

console.log("hello"[2])