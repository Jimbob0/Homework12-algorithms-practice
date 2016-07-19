// 5. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".

// (source: https://adriann.github.io/programming_problems.html)
debugger;
function toPigLatin(text){
	var arr = text.split(" ");
	for (var i = 0; i < arr.length; i++){
		var wordarr = [];
		wordarr = arr[i].split("");
		var firstletter = wordarr.splice(0,1);
		wordarr.push(firstletter);
		wordarr.push("ay");
		arr[i]= wordarr.join("");
	}
	return arr.join(" ");
}
console.log(toPigLatin("the quick brown fox"));