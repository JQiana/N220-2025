const itemUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");

const items = ["Apple", "Orange","Plum", "Pear", "Harry Potato"];
const cart = [];

function removeItemFC(){
    cart.shift();

    showCart
}

function showCart(){
    cartUlRef.innerHTML = "";
    for (let i = 0; i < cart.length; i++){
        cartUlRef.innerHTML += "<li>" + cart[i] +"</li>";
    }
}

function addItemToCart(e){
    cart.push(e.target.dataset.name);

    console.log(cart);

}

for (let i = 0; i < items.length; i++){
    const newLi = document.createElement("li");
    newLi.innerText = items[i];

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    newBtn.dataset.name = items[i];
    newBtn.onclick = addItemToCart;
    newLi.appendChild(newBtn);

    itemUlRef.appendChild(newLi);

}

removeItemFC.onclick = removeItemFC;
