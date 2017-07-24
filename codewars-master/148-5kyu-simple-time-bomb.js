/*
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);
*/

// My solution

var wire = Object.keys(global).filter(x=>(typeof global[x] === 'number'))[0];
CutTheWire(this[wire]);

// Alternative solutions

var wire = Object.keys(this).pop();
CutTheWire(this[wire]);

//

console.log(CutTheWire.toString());

var wire = theWire; // Find the wire.
CutTheWire(this[wire]);
