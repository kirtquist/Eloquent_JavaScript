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