//Variable can not be changed
const password = "(d0nteatTheScript)";

//If the password starts with a space
const space = password.startsWith(" ");
console.log(`Start with Space: ${space}`);

//If the password contains 8 or more characters
const characters = password.length >= 8;
console.log(`Contains 8 or more characters: ${characters}`);

//If the password contains the word "eat"
const eat = password.includes("eat");
console.log(`contains the word "eat": ${eat}`);