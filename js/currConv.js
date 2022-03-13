const currTo = document.getElementById("currTo");
const currFrom = document.getElementById("currFrom");
const resultText = document.getElementById(resultText);
const convertButton = document.getElementById("convertButt");
let currMap = new Map();

document.addEventListener("DOMContentLoaded", () => {
    getCurrValues();
})

function getCurrValues() {
    try {
        fetch("https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID")
        .then (result => result.json())
        .then (res => {
            
        })
    } catch (err) {
        alert(err + " was caught!");
    }
}


convertButton.addEventListener("click", () => {
    //Fill in the conversion function here
})

currTo.addEventListener("change", () => {
    //Fill in with what to do when value in dropdown changed
})

currFrom.addEventListener("change", () => {
    //Fill in with what to do when value in dropdown changed
})