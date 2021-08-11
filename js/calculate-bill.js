var calculateBtn = document.querySelector(".calculateBtn");

var billTotalElement = document.querySelector(".billTotal");

var billStringElement = document.querySelector(".billString");


calculateBtn.addEventListener('click', function (){
    var billString = billStringElement.value;
      
    var billItems = billString.split(",");
        
    var billTotal = 0;
      
    for (var i=0;i<billItems.length;i++){
        var billItem1 = billItems[i].trim();

        if (billItem1.includes("call")){
            billTotal += 2.75;
        }
        else if (billItem1.includes("sms")){
            billTotal += 0.75;
        }
    }
        
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
    

    if (billTotal >= 20 && billTotal<=30){
        billTotalElement.classList.add("warning");
    }else if (billTotal > 30){
        billTotalElement.classList.add("danger");
    }


       
        
} );
