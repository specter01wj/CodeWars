/*
Our friendly friend Pete is really a nice person, but he tends to be rather... Inappropriate.

And possibly loud, if given enough ethanol and free rein, so we ask you to write a function that should take its not always "clean" speech and cover as much as possible of it, in order not to offend some more sensible spirits.

For example, given an input like

What the hell am I doing here? And where is my wallet? PETE SMASH!

You are expected to turn it into something like:

W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!

In case you didn't figure out the rules yet: any words longer than 2 characters need to have its "inside" (meaning every character which is not the first or the last) changed into *; as we do not want Pete to scream too much, every uppercase letter which is not at the beginning of the string or coming after a punctuation mark among [".","!","?"] needs to be put to lowercase; spaces and other punctuation marks can be ignored.

Conversely, you need to be sure that the start of each sentence has a capitalized word at the beginning. Sentences are divided by the aforementioned punctuation marks.

Finally, the function will take an additional parameter consisting of an array/list of allowed words which are not to be replaced.

Extra cookies if you can do it all in some efficient way and/or using our dear regexes ;)
*/

// My solution

function peteTalk (str, ok) {
  if (!ok) ok = [];
  ok = ok.map(word => word.toLowerCase());
  return str.replace(/\b\S([A-Za-z]+)\S\b/g, (match, subm) => ok.indexOf(match.toLowerCase()) < 0 ? match.replace(subm, subm => Array(subm.length + 1).join('*')) : match)
            .replace(/([A-Z])/g, (match, subm) => match.replace(subm, subm.toLowerCase()))
            .replace(/(?:[?!.]\s)([a-z])/g, (match, subm) => match.replace(subm, subm.toUpperCase())) 
            .replace(/^([a-z])/, (match,subm) => match.replace(subm, subm.toUpperCase()));
}

// Best-rated solution

function peteTalk(speech, ok){
  ok = (ok||[]).map(function(s){ return s.toLowerCase(); });
  return speech.toLowerCase()
    // cover
    .replace(/(\w)(\w+)(\w)/g, function(s,a,b,c){ return ok.indexOf(s)>=0 ? s : a+b.replace(/./g, '*')+c; })
    // capitalize
    .replace(/(^|!|\?|\.)\s*\w/g, function(s){ return s.toUpperCase(); });
}