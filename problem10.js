// 10. Write a function which, given an array, determines the subarray with the largest sum.

// [1, 3, -4, 5, 7, 9] -> [5, 7, 9]
// [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// [2, 2, -10, 5, -10, 2, 2] -> [5]

// (Source: http://venus.cs.qc.edu/~ryba/cs111/Array.pdf with edits)
function largestSum(arr){
	var object = [];
	subarr = 0;
	for (var i = 0; i < arr.length; i++){
		for (var j = 1; j <= arr.length; j++){
			subarr = (arr.slice(i,j));
			sum = 0;
			for (var k = 0; k < subarr.length; k++){
				sum += subarr[k];
			}
			object.push({subarr: subarr, sum: sum});
		}
	}
	object.sort(function(c,b){
		return b.sum - c.sum;
	});
	return object[0].subarr;
}
console.log(largestSum([2, 2, -10, 5, -10, 2, 2]));
