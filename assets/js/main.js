let button = document.querySelector("#burgerKingGenerate");

let numbers = document.querySelector(".numbers");
let generated = document.querySelector(".generated");

let letterInput = document.querySelector('#letter__input');
let letterGenerated = document.querySelector('#letter');

let numbersInput = document.querySelector('#numbers__input');
let numbersGenerated = document.querySelector('#numbers');

button.addEventListener('click', function() {
    numbers.classList.add("hidden");
    generated.classList.remove("hidden");
    letterGenerated.innerHTML = letterInput.value;
    numbersGenerated.innerHTML = numbersInput.value;
});