'use strict'

function interleave(string1, string2) {

	let arrayOfStrings = Array.from(arguments);
	//console.log(arrayOfStrings);
	// let splitArray = arrayOfStrings.forEach(function(curr){
	// 	console.log(curr);
	// 	console.log(typeof curr);
	// 	return curr;
	// });
	for(var i=0; i<arrayOfStrings.length; i++){
		arrayOfStrings[i] = arrayOfStrings[i].split(',').join("").split('');
	}
	


	let finalArray = [];
	for(var i=0; i < arrayOfStrings.length; i++){
		for(var j=0; j<arrayOfStrings[i].length; j++) {

			finalArray[i+j*arrayOfStrings.length] = arrayOfStrings[i][j];
			// console.log(i,j,arrayOfStrings[i][j], finalArray);
		}
	}

	return finalArray.join('');

}