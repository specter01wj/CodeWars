/*
The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent, rounded up to 2 decimal digits.

For more information about GC-content you can take a look to wikipedia GC-content.

For example: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".

Note: You can take a look to my others bio-info kata here
*/

function gcContent(dna) {
  let gcs = dna.replace(/[AT]/gi,'');
  return dna.length === 0 ? 0 : Math.round(gcs.length/dna.length*10000)/100;
}