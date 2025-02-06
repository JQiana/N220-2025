//variable can be changed in other section
let price = 40.99;
let tax = 0.07;
let discount = 0.10;

//Total after tax
let total = price * (1+tax);
console.log(`Total Price After Tax: ${total}`);

//Item qualify for discount
let qualify = price > 50;
console.log(`Eligibility for discount: ${qualify}`);

//Discount total after tax
let dTotal;
if (qualify){
    dTotal = price * (1 + tax) * (1 - discount);
    console.log(`Discount total after tax: ${dTotal}`);
} else {
    console.log("item not qualify for discount.");
}

