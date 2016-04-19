

//(numberOfFunctions: Number)
// => arrayOfFunctions: Array of //=> resultFunction: Function Object

function createFunctions(numberOfFunctions) {

	let arrayOfFunctions = new Array(numberOfFunctions)
	let counter = -1;
	//*
	for(var i = 0; i<arrayOfFunctions.length; i++) {
		(function () {

			arrayOfFunctions[i] = 
			function() {
				counter++;
				counter = counter === arrayOfFunctions.length ? 0 : counter;
				return counter
			}
			}
		)()
	};




	//**
	// arrayOfFunctions.forEach(function(curr, index){
	// 	console.log(index);
	// 	let a = index;
	// 	curr = function() {
	// 		let b = a
	// 		console.log(b);
	// 		return (b) => {
	// 			return b;
	// 		}
	// 	};
	// 	counter++;
	// 	return curr;
	// }, [])
	console.log(arrayOfFunctions);

	return arrayOfFunctions;
};




