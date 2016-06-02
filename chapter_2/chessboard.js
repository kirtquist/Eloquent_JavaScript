// Creates a string that represents an 8×8 grid, using newline characters to separate lines. 

var size = 8;

// Scalable to any size by changing the value of the size variable.

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);