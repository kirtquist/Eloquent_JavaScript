// Prints all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, prints "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), prints "Buzz" instead.
// Prints "FizzBuzz", for numbers that are divisible by both 3 and 5

// First Try

  for (var n = 1; n <=100; n++) {
  if ((n % 5 == 0) && (n % 3 ==0))
    console.log("FizzBuzz");
  else if (n % 5 == 0) 
    console.log("Buzz");
  else if (n % 3 == 0)
      console.log("Fizz");
  else
  console.log(n);
  };
  
  

// Course Answer
  
  for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}