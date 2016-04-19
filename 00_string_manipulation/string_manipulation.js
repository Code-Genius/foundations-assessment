'use strict';

// (anyString: String) => (Number: the number of vowels in the string)
function vowelsCount (anyString) {

	//regex

	const vowelMatcher = new RegExp('[aeiou]','gi');

	//match

	let vowelArray = anyString.match(vowelMatcher);

	//match.length

	return !vowelArray ? 0 : vowelArray.length;
}