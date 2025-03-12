const menuList = document.getElementById("menu");
const cartList = document.getElementById("cart");
const noItem = document.getElementById("no-items");

const availableFood = [
    {name:"Hamburger", price:2.99},
    {name:"Cheeseburger", price:3.99},
    {name:"Cheese Pizza", price:3.99},
    {name:"Pepperoni Pizza", price:4.99},
    {name:"Sausage Pizza", price:4.99},
    {name:"Caesar Salad", price:3.99},
    {name:"Fries", price:1.99},
    {name:"Onion Rings", price:2.49},
];

let cart = [];

function updateCart(){
    cartList.innerHTML = "";
    if(cart.length === 0){
        cartList.innerHTML +=`<tr id="no-items">
        <td colspan="4">No items in cart</td>
      </tr>`;
    }else {
        let total = 0;
        noItem.style.display = "No item available";
        for (let i = 0; i<cart.length; i++){
            const tr = document.createElement("tr");
            tr.innerHTML = 
            `<td>${cart[i].name}</td>
            <td>$${cart[i].price}</td>
            <td><textarea oninput="cart[${i}].SpecialRequest = this.value">${cart[i].SpecialRequest || ""}</textarea></td>
            <td><button onclick="removeItem(${i})">-</button></td>`;
            cartList.appendChild(tr);
            total += cart[i].price;
        }

        const row = document.createElement("tr");
        row.innerHTML = `<td>Total</td>
        <td colspan="3">$${total}</td>`;
        cartList.appendChild(row);
    }

}

function addToCart(name,price){
    cart.push({name,price,SpecialRequest:""});
    updateCart();
}

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

for (let i = 0; i < availableFood.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${availableFood[i].name} - $${availableFood[i].price} <button onclick="addToCart('${availableFood[i].name}', ${availableFood[i].price})">+</button>`;
    menuList.appendChild(li);}

updateCart();
