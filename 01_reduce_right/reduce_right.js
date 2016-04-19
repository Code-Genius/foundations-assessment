'use strict';


// reduceRight
// (inputArray: Array, Starting Point: String, Combining Function)
// => Object that is the result of the combining function run with a reversed array.

// function reduceRight (inputArray, startingPoint, combiningFunction) {
// 	let reversedArray = inputArray.slice().reverse();
// 	let functionResult;
// 	if(typeof startingPoint === 'string'){
// 		functionResult = Array.from(combiningFunction(reversedArray, startingPoint)).filter(function(curr) {
// 		return curr !== ','
// 		}).join('');
// 	} else if(typeof startingPoint === "object") {
// 		functionResult = inputArray.forEach()
// 	}

// 	return functionResult;

// }

// function reduceRight2(words, obj, wordFrequency) {
// 	let newArray = words.slice();;
// 	let prev = obj;
// 	let result = [];
// 	for( var i=0; i<newArray.length; i++) {
// 		result[i] = wordFrequency(prev, newArray[i]);
// 	}
	
// 	if(typeof obj === 'string') return result.reverse().join('');
// 	if(typeof obj === 'number') return newArray.reduce(wordFrequency, obj);
	
// 	return result[0];
// };

function reduceRight(origArray, context, callback) {

	let reversedArray = origArray.slice().reverse();
	let prev = context;
	for(var i=0; i<reversedArray.length; i++) {
		prev = callback(prev, reversedArray[i]);
	}
	return prev;
	
};

// function reduceRight(array, prev, callback) {
// 	return array.slice().reduceRight(callback, prev);
// }

function reduceRightRecursive (origArray, context, callback, prevCallCount){
	let callCount = 0;
	if(!!prevCallCount) callCount = prevCallCount++;

	if(callCount >= origArray.length && typeof context === 'string' ) return context.split('').reverse().join('');
	if(callCount >= origArray.length) return context;

	let newArray = origArray.slice();
	let currentResult = callback(context, origArray[callCount])
	callCount++;
	return reduceRightRecursive(origArray, currentResult, callback, callCount);


}

