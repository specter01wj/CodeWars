/*
You probably know 42 has "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". But for Freud, the answer is quite different.

In the society he lived in, people, women in particular, had to repress their sexual needs. It was how the society was at time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything is basically related to, and explained by sex.

In this kata, the toFreud() function will take a string as it's argument, and return a string with every word replaced by the one explanation to everything, according to Freud.
*/

const toFreud = str => str.split(' ').map(x => 'sex').join(' ');

console.log(toFreud("i'm pretty happy about this"));