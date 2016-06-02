// Behaves like countBs, except it takes a second argument that indicates the character that is to be counted 

function countChar(string, char) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == char)
      counted += 1;
  return counted;
}

// Takes a string and returns a number that indicates how many uppercase “B” characters are in the string.
// Makes use of countChar
function countBs(string) {
  return countChar(string, "B");
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
