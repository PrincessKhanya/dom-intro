const radioBillAddBtn= document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

radioBillAddBtn.addEventListener("click", function (){

    const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio:checked");

    if (billItemTypeRadioElement.value === "call"){
        callsTotal += 2.75
    }
    else if (billItemTypeRadioElement.value === "sms"){
        smsTotal += 0.75;
    }

    var roundedCallTotal = callsTotal.toFixed(2);
    callTotalTwoElement.innerHTML = roundedCallTotal;

    var roundedSmsTotal = smsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = roundedSmsTotal;

    totalCost = callsTotal + smsTotal;

    var roundedTotal = totalCost.toFixed(2);
    totalTwoElement.innerHTML = roundedTotal;

    totalTwoElement.classList.remove("danger");
    totalTwoElement.classList.remove("warning");
    

    if (totalCost >= 50){
        totalTwoElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalTwoElement.classList.add("warning");
    }

})

