/*
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
*/

// My solution

var wireCode = Object.keys(global).filter(x=>(typeof global[x] === 'number'))[0];
Bomb.CutTheWire(global[wireCode]);

// Alternative solutions

for (var name in this) {
  if (typeof this[name] === 'number') {
    Bomb.CutTheWire(this[name]);
  }
}

//

for (var i in global) if (i.indexOf('boom') === 0) Bomb.CutTheWire(global[i]);

//

Object
  .keys(this)
  .filter(function(key) {
    return /boom\d+/.test(key);
  })
  .forEach(function(key) {
    Bomb.CutTheWire(this[key]);
  });

//

var wireCode = this[Object.keys(this).slice(-2,-1)];
Bomb.CutTheWire(wireCode);