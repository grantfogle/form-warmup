var amount = document.querySelector(".amount")
var form = document.querySelector("form")
var tipMessage = document.querySelector(".tip-message")

form.addEventListener("submit", calculateTip)

function calculateTip(event) {
    event.preventDefault();
    console.log(amount.value)
    var result = amount.value * .2
    tipMessage.innerHTML = "You should tip $" + result.toFixed(2)
    tipMessage.classList.add("bg-info")
}