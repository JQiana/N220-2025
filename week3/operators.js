const applePrice = 0.49;

let pickApples = 4;

//I went bacl and pocked more apples
pickApples += 10;

//I deopped a few
pickApples -= 4;

const totalForApples = applePrice * pickApples;

console.log("Cost of Apple", totalForApples);

console.log("Too many apples", pickApples >5);

//eat a few apples and drop the rest 
pickApples -= 6;

console.log("Too many apples", pickApples > 5);

let rememberRouterHome = false;

console.log("Good to go home", pickApples > 5 && rememberRouterHome);

let haveAMap = true;

console.log("Good to go home", rememberRouterHome || haveAMap ||Boolean(""));

console.log("Total for aooles a number?", typeof totalForApples);

console.log("string of 5:", typeof String(5), typeof 5);

let myAddress = "413";

myAddress += "Peach" + "St";

console.log("My Address", myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My address", myAddress.replace("st", "street"));

console.log("ty". length);


let myAge = "76";

myAge = number(myAge);

myAge += 5/12;

console.log("My Age". myAge.toFixed(2));

console.log("Next Birthday". Math.ceil(myAge));

console.log("My favorite number". Math.round(Math.random()* 100));


