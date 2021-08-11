const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtn= document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;




addToBillBtn.addEventListener("click", function (){
    var billTypeEntered1 = billTypeTextElement.value;
    var billTypeEntered = billTypeEntered1.trim();

    if (billTypeEntered.includes("call")){
        callsTotal += 2.75
    }
    else if (billTypeEntered.includes("sms")){
        smsTotal += 0.75;
    }

    var roundedCallTotal = callsTotal.toFixed(2);
    callTotalOneElement.innerHTML = roundedCallTotal;

    var roundedSmsTotal = smsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = roundedSmsTotal;

    totalCost = callsTotal + smsTotal;

    var roundedTotal = totalCost.toFixed(2);
    totalOneElement.innerHTML = roundedTotal;

    totalOneElement.classList.remove("danger");
    totalOneElement.classList.remove("warning");
    

    if (totalCost >= 50){
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }

})


