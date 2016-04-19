

function keyAdder() {
		let resultArray = [];
	let objectKeys = Object.keys(this);
	for(var prop in this) {
		if(typeof this[prop] === 'number' && this.hasOwnProperty(prop)) resultArray.push(this[prop]);
	}
	//return Object.keys(this);
	return resultArray.reduce(function(prev, curr) {
		return prev+curr;
	},0);
}