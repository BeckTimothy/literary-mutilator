

/**
 * function that turns a string into an anagram-ized version of the string
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

/**
 * function that 'encrypts' a string with ROT13
 * @param string that needs to be 'encrypted'
 * @returns {string} ROT13 'encrypted' string
 */
let test = "Abcdefghijklm nOPQRSTUVWXYZ";
function encrypt(string) {
	//turn the string into an array to loop through
	let explodedStr = string.split('');
	for (i=0; i < explodedStr.length; i++) {
		let char = explodedStr[i];
		//if character is on the lower half of the alphabet add 13 to its charcode
		if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 77 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109) {
			explodedStr[i] = explodedStr[i].replace(explodedStr[i], String.fromCharCode(char.charCodeAt(0) + 13));
			//if character is on the upper half of the alphabet subtract 13 from its charcode
		}else if(char.charCodeAt(0) >= 78 && char.charCodeAt(0) <=90 || char.charCodeAt(0) >= 110 && char.charCodeAt(0) <= 122) {
			explodedStr[i] = explodedStr[i].replace(explodedStr[i], String.fromCharCode(char.charCodeAt(0) - 13));
		}
	}
	// return the modified array as a string
	return explodedStr.join('');
}