const fetch = require("node-fetch");

/**
 * Finds all instances of param2 inside param1 and replaces them with param3
 *
 * @param string to mutilate
 * @param searchFor string of characters we are searching for
 * @param replaceWith string of characters we are replacing with
 * @returns {string} new string that has replaced the searched for characters
 */
function findAndReplace(string, searchFor, replaceWith) {
	//splits the string into an array of strings cut off at the searchFor content
	let arr = string.split(searchFor);
	//rejoins array back into new string with the replaceWith strings in between
	return arr.join(replaceWith);
}

/**
 * fisher-yates shuffle for an even distribution of odds during shuffling to achieve near-true randomness
 * @param string string to be shuffled
 * @returns {string} that has been shuffled
 */
function shuffle(string) {
	//split the string into an array
	let arr = string.split(' ');
	//create an index based off the length of the entire aray
	let currentIndex = arr.length;
	//for loop through the entire array, repositioning items randomly as we loop
	for (i = 0; i < currentIndex; i++) {
	//create a random index
		randomIndex = Math.floor(Math.random() * currentIndex);
		//put current index in a temp value then replace it with randomly selected index
		tempValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = tempValue;
	}
		return arr.join(' ');
}

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

/**
 *dead code
 * @returns {Promise<Object>}
 */
async function loadaPTag() {

	let ranNum = Math.floor(Math.random() * 500);
	let fetchInput = `https://jsonplaceholder.typicode.com/comments/${ranNum}`;
	let response = await fetch(fetchInput);
	let data = await response.json();
	var stringToReturn = data.body;
	return stringToReturn.valueOf();
}