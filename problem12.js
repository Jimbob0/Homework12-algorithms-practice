// 12. Write a program to percent the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur. 
// Example output:
// th 2.37%
// in 2.20%
// fj 2.00%
// ...
// (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)
function letterPairs(text){
  var a = [];
  var output = [];
  if (text === ""){
    return "Input is empty. Please input text.";
  } else {
    text = text.split("");
    for (var i = 0; i < text.length - 1; i++){
      pair = text[i] + text[i+1];
      percent = 100 / (text.length-1);
      a.push({pair:pair, percent:percent});
    }
    for (var x = 1; x < a.length - 1; x++){
      for (var y = x + 1; y < a.length - 1; y++){
        if (a[x].pair === a[y].pair){
          a[x].percent += 100 / (text.length-1);
          a.splice(y,1);
        }
      }
    }
    a.sort(function(c,b){
      return b.percent - c.percent;
    });
    if (a.length <= 10){
      for (var z = 0; z < a.length; z++) {
        a[z].percent += " %";
        output.push(a[z]);
      }
    }else{
      for (var z = 0; z < 10; z++) {
        a[z].percent += " %";
        output.push(a[z]);
      }
    }
    return output;
  }
}
console.log(letterPairs(prompt('Input text to find most common letter pairs.')));