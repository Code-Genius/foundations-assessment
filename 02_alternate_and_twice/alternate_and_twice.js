'use strict';



function alternate(callback) {
	let counter = 0;
	return function() {
		if(counter === 0) {
			counter = 1;
			callback();
		} else {
			counter = 0;
		}
	};


}


function twice(callback) {

	let counter = 0;
	return function() {
		if(counter < 2) {
			counter++;
			return callback();
		} else {
			return 0;
		}
	};



}