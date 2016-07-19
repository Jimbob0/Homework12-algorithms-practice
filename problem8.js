// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
function randomArray(){
	var arr = [];
	for (var i = 0; i < 10; i++){
		arr[i] = Math.floor(Math.random() * 100 + 1);
	}
	for (i = 0; i < 9; i++){
		for (var j = i ; j < 10; j++){
			if (arr[i] === arr[j] && j !== i){
				// I use this method with the && instead of having j=i+1 to repeat the checks in case the new random value is still a duplicate
				arr[i] = Math.round(Math.random() * 100 + 1);
			}
		}
	}
	return arr;
}
console.log(randomArray());