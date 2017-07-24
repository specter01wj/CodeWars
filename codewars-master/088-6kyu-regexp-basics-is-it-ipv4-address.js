/*
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

// My solution

String.prototype.ipv4Address=function(){
  return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(this);
};

// Best-rated solution

String.prototype.ipv4Address = function() {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};