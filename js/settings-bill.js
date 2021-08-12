
// get a reference to the sms or call radio buttons
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");
// get refences to all the settings fields
const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const warningLevelSettingElement = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const billAddBtn = document.querySelector(".billAddBtn");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callSetting = 0;
var smsSetting = 0;
var warningSetting = 0;
var criticalSetting = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function (){
    callSetting = Number(callCostSettingElement.value);
    smsSetting = Number(smsCostSettingElement.value);
    warningSetting = Number(warningLevelSettingElement.value);
    criticalSetting = Number(criticalLevelSettingElement.value);
});


//add an event listener for when the add button is pressed
billAddBtn.addEventListener("click", function (){

    const billItemTypeWithSettingsElement = document.querySelector(".billItemTypeWithSettings:checked");

    if (billItemTypeWithSettingsElement.value === "call"){
        callsTotal += callSetting;
    }
    else if (billItemTypeWithSettingsElement.value === "sms"){
        smsTotal += smsSetting;
    }

    var roundedCallTotal2 = callsTotal.toFixed(2);
    callTotalSettingsElement.innerHTML = roundedCallTotal2;

    var roundedSmsTotal2 = smsTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML = roundedSmsTotal2;

    totalCost = callsTotal + smsTotal;

    var roundedTotal1 = totalCost.toFixed(2);
    totalSettingsElement.innerHTML = roundedTotal1;

    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.remove("warning");
    

    if (totalCost >= 50){
        totalSettingsElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalSettingsElement.classList.add("warning");
    }

});

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.








