console.log("Hola");

let cardValue = 0;

let addButtons = document.querySelectorAll(".button--add");
let removeButtons = document.querySelectorAll(".button--remove");
let cardCounter = document.querySelectorAll(".card__counter");

console.log(cardCounter[0].innerHTML);
addButtons[0].onclick = sumar;
removeButtons[0].onclick = restar;

function sumar(i){
    cardValue++;
    cardCounter[0].innerHTML = cardValue;
    console.log(cardCounter[0].innerHTML);

};

function restar(i) {
    cardValue--;
    cardCounter[0].innerHTML = cardValue;
    console.log(cardCounter[0].innerHTML);

};

for ( i = 0; i < addButtons.length; i++){
    addButtons[i].onclick = sumar(i);
}

/*
console.log(addButtons.length);
console.log(removeButtons.length);
console.log(cardCounter.length);
console.log(cardCounter[0].innerHTML);

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = removeValue;
}

function addValue() {
    
    cardValue++;
    console.log("Se suma 1")
    
}

function removeValue() {
    if (cardValue == 0) {
        console.log("Se llegó a 0") ;
    }
    console.log("Se resta 1")
    console.log(cardValue);
    cardValue--;
    console.log(cardValue);
}

console.log(cardValue);
*/