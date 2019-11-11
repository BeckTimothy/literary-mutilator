

/**
 * function that turns a string into an anagramized version of the string
 * @param string string to make into an anagram
 * @returns {string} anagramized string
 */
function createAnagram(string) {
	//split string into an array of words
	let strArr = string.toLowerCase().split(' ');
	//loop through array of words
	for (let i = 0; i < strArr.length; i++){
		//split the words we iterate through
		//then sort them alphabetically and join them
		strArr[i] = strArr[i].split('').sort().reverse().join('');
	}
	//join the array back into a single string then return
	return strArr.join(' ');
}