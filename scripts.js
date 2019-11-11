

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

let test = "Abcdefghijklm nOPQRSTUVWXYZ";
function encrypt(string) {
	//encrypt using ROT13
	let explodedStr = string.split('');
	for (i=0; i < explodedStr.length; i++) {
		let char = explodedStr[i];
		if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 77 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109) {
			explodedStr[i] = explodedStr[i].replace(explodedStr[i], String.fromCharCode(char.charCodeAt(0) + 13));
		}else if(char.charCodeAt(0) >= 78 && char.charCodeAt(0) <=90 || char.charCodeAt(0) >= 110 && char.charCodeAt(0) <= 122) {
			explodedStr[i] = explodedStr[i].replace(explodedStr[i], String.fromCharCode(char.charCodeAt(0) - 13));
		}
	}
	return explodedStr.join('');
}
console.log(encrypt(test));

// plus 13 chars -> 65-78 && 97-110
// minus 13 chars -> 79-90 && 111-122

//space : 32
//capital letters: A-Z : 65-90
//lowercase letters a-z : 97-122