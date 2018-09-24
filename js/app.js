var amount = document.querySelector(".amount");
var form = document.querySelector("form");
var tipMessage = document.querySelector(".tip-message");
var option = document.getElementsByTagName("option");
var select = document.querySelector("select");
var tip = 0;

console.log(option[1].innerHTML);

form.addEventListener("submit", calculateTip);

function calculateTip(event) {
    var msg = "You should tip $";
    event.preventDefault();
    var result = amount.value * tip;
    tipMessage.innerHTML = msg + result.toFixed(2);
    tipMessage.classList.add("bg-info");
}

select.addEventListener("change", getTipValue);

function getTipValue(event) {
    for (var i = 0; i < option.length; i++) {
        if (option[i].selected) {
            return tip = option[i].value;
        }
    }
}