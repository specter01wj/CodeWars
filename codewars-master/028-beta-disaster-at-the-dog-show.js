/*
You're attending a local dog show when disaster strikes - all the dogs have escaped! You help round them up, but you need to find some way to organise them back into their breeds for the judging. You're put in charge of the small breeds and quickly write down some distinguishing features:

Dachshund:
  body: "long"
  coat: "short"
  ears: "long"

Chihuahua:
  body: "short"
  coat: "short"
  ears: "short"

Shih Tzu:
  body: "short"
  coat: "long"
  ears: "long"

Write a function to check if a given dog has the relevant properties and return its breed as a string. If it doesn't match any of the given breeds, return "Let's get someone else to check"
*/

function dogChecker(dog) {
  if (dog.body == "long" && dog.coat == "short" && dog.ears == "long") return "Dachshund";
  else if (dog.body == "short" && dog.coat == "short" && dog.ears == "short") return "Chihuahua";
  else if (dog.body == "short" && dog.coat == "long" && dog.ears == "long") return "Shih Tzu";
  else return "Let's get someone else to check";
}