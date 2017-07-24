/*
Implement String#parse_mana_cost, which parses Magic: the Gathering mana costs expressed as a string and returns a Hash with keys being kinds of mana, and values being the numbers.

Don't include any mana types equal to zero.

Format is:

optionally natural number representing total amount of generic mana (use key *)
optionally followed by any combination of w, u, b, r, g (case insensitive in input, return lower case in output), each representing one mana of specific color.

If case of Strings not following specified format, return nil/null/None.
*/

// My solution

String.prototype.parseManaCost=function(){
  var output = {};
  if (!/^\d*[wubrg]*$/i.test(this)) return null;
  output['*'] = +this.match(/^\d*/)[0];
  output.w = (this.match(/w/gi) || []).length;
  output.u = (this.match(/u/gi) || []).length;
  output.b = (this.match(/b/gi) || []).length;
  output.r = (this.match(/r/gi) || []).length;
  output.g = (this.match(/g/gi) || []).length;
  for (var color in output) {if (output[color] === 0) delete output[color];}
  return output;
};

//Best-rated solution

String.prototype.parseManaCost=function(){
  var rs={};
  if (/[^\dwubrg]/i.test(this)) return null;
  if (/^\d+/.test(this)&&parseInt(this.match(/^\d+/))) rs["*"]=parseInt(this.match(/^\d+/));
  ["w","u","b","r","g"].forEach(x=>{var rr=new RegExp(x,"ig");if (rr.test(this)) rs[x]=this.match(rr).length;});
  return rs;
};