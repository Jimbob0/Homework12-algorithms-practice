// 11. One way of encoding a message is called a "square code". Given a message like:
  
//   "Have a nice day!"
  
//   We determine an appropriate size of a square or rectangle to contain this message without spaces like so:
  
//   have
//   anic
//   eday
//   !
  
//   We then read the square in columns, which gives us our encoded message:
  
//   hae! and via ecy
  
//   Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.
  
//   (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)
function encodeSquare(text){
  text = text.split("");
  var textRow = [];
  var output = [];
  var spaces = [];
  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text.splice(i,1);
    }
  }
  var squareSize= Math.ceil(Math.pow(text.length , 1/2));
  while (text.length){
    textRow.push(text.splice(0,squareSize));
  }
  for (var x = 0; x < textRow.length-1; x++){
    spaces.push(" ");
  }
  textRow.push(spaces);
  for (var x = 0; x < textRow.length; x++){
    for (var y = 0; y < textRow.length; y++){
      if (textRow[y][x]){
        output.push(textRow[y][x]);
      }
    }
  }
  return output.join("");
}
function decodeSquare(text){
  text = text.split("");
  var textRow = [];
  var output = [];
  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text.splice(i,1);
    }
  }
  var squareSize= Math.ceil(Math.pow(text.length , 1/2));
  var remainder= text.length % squareSize;
  for (var i = remainder; i < squareSize; i++){
    text.splice((i+1)*squareSize-1,0,"");
  }
  while (text.length){
    textRow.push(text.splice(0,squareSize));
  }
  for (var x = 0; x < textRow.length; x++){
    for (var y = 0; y < textRow.length; y++){
      if (textRow[y][x]){
        output.push(textRow[y][x]);
      }
    }
  }
  return output.join("");
}
console.log(decodeSquare(""));
console.log(encodeSquare("me"));