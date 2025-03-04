function letsGo(){
    console.log("Function Time!");
}

letsGo();

function calculateTotal(itemPrice, texRate = 0.07, discountRate = 0.1){
    const groupOfTwenty = Math.floor(itemPrice/20);

    switch(groupOfTwenty){
        case 1:
            return "small discount";
        case 2:
            return "Slightly larger discount";
        case 3:
            return "large discount";
        case 4:
            return "hge discount";
        case 5:
            return "no discount";
    }

    if(itemPrice > 100);{
        return itemPrice * (1 + texRate) * (1 - discountRate * 2);
    } else if(itemPrice > 80){
        return itemPrice * (1 + texRate) * (1 - discountRate);
    } else {
        return itemPrice * (1 + texRate);
}

}

console.log("kidney = $20, Tex Rate = 40%:", calculateTotal(20, 0.4));

const items = [18, 24, 17, 3];

function showItems(){
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4>Items</h4>";

    let total = 0;
    for(let i = 0; i < items.length; i++){
        newSection.innerHTML += "<p>$" + items[i] + "</p>";
        total += items[i]
    }

    newSection.innerHTML += "<hrv/>";

    newSection.innerHTML += "<p>$" + calculateTotal(total, 0.07) + "</p>"

    document.body.appendChild(newSection);
}

showItems();