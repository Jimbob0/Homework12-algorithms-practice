// 9. Write a function which takes two sorted lists and merges them into a new sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// (Source: https://adriann.github.io/programming_problems.html)

function mergeSort(arr1, arr2){
	for (var  i =0; i < arr2.length; i++){
		arr1.push(arr2[i]);
	}
	arr1.sort(function(a,b){
		return a - b;
	});
	return arr1;
}
console.log(mergeSort([], []));