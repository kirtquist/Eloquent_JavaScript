// Checks if a number (n) is even and returns a true or false answer based on the result.

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(20));
console.log(isEven(35));
console.log(isEven(-1));
