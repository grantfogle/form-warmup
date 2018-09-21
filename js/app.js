var amount = document.querySelector(".amount")
var form = document.querySelector("form")
var tipMessage = document.querySelector(".tip-message")
var option = document.getElementsByTagName("option")
var tip = 0

console.log(option[1].innerHTML)

form.addEventListener("submit", calculateTip)

function calculateTip(event) {
    event.preventDefault();
    var result = amount.value * option[i].innerHTML
    tipMessage.innerHTML = "You should tip $" + result.toFixed(2)
    tipMessage.classList.add("bg-info")
}

for (i = 1; i < option.length; i++) {
    option[i].addEventListener("click", getTipValue)
}

function getTipValue(event) {
    console.log(option);
    return tip = event.target.innerHTML * amount.value
    console.log(tip)
}