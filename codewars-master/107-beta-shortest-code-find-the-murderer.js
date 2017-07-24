/*
Shortest Code : Find the murderer
(Code length limit: 105 chars)

This is the challenge version of coding 3min series. If you feel difficult, please complete the simple version

Task:

An important person was murdered, he wanted to say the name of the murderer before death, but because the sound is too small so difficult to identify.

Give you two parameters:

said, a string, what's the person said before death;

said starts with the first letter of the name, each "~" represents an uncertain letter, the length of the said does not mean the length of the name, because he might have died before he could say the full name of the murderer.

suspects, a string array, name list of all suspects.

Please refer to said, find the murderer from the suspects.

Result will be a string. If not found, should return "", if more than one suspects found, return the name of all, separated by ','.

Example:

  Example1:

  said='b~~~~~~~~~~~~~~l'
  it means the murderer's name first char is 'b',last char is 'l'
  (Because it is spoken, so please ignore the case)

  suspects=['Bernard Deltheil','Peter Gone','Peter Reeves','Roland Scorsini']
  Let's us search in suspects, Wow~~, 'Bernard Deltheil' maybe is the murderer.

  So, return a string: 'Bernard Deltheil'

  Example2:
  said='p~t~r'
  it means the murderer's name first char is 'p',3rd char is 't',5th char is 'r'

  suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
  Wow~, 'Peter Gone' and 'Peter Reeves' maybe is the murderer.

  So, return a string: 'Peter Gone,Peter Reeves'

  Example3:
  said='a~b~c~~d'

  suspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
  It seems the murderer's name is not appear in the suspects.

  So, return a empty string: ''

Code length calculation

In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

For example:

If you typed sc=x=>x+1
after compile, it will be:sc=function(x){return x+1;}
*/

// My solution

function sc(a,b){return b.filter(function(x){return eval(`/^${a.replace(/~/g,'.')}/i`).test(x)})+''}

// Best solution (1 char shorter)

function sc(d,u){return eval(`u.filter(function(x){return/^${d.replace(/~/g,".")}/i.test(x)})`)+''}
