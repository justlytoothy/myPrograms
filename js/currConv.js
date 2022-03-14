const currTo = document.getElementById("currTo");
const currFrom = document.getElementById("currFrom");
const resultText = document.getElementById("resultText");
const convertButton = document.getElementById("convertButt");
const fromNum = document.getElementById("currFromNum");
let actualValue;
let beginning;
let ending;
let currMap;
let beginNum;

document.addEventListener("DOMContentLoaded", () => {
    getCurrValues();
})

function getCurrValues() {
    try {
        fetch("https://openexchangerates.org/api/latest.json?app_id=a062130478a942ad997f3f9167283bee")
        .then (result => result.json())
        .then (res => {
            currMap = res.rates;
            for(const key in currMap) {
                var opt = document.createElement("option");
                opt.value= key;
                opt.innerHTML = key; // whatever property it has

                // then append it to the select element
                currToSel.appendChild(opt);
            }
            index = 0;
            for(const key in currMap) {
                var opt = document.createElement("option");
                opt.value= key;
                opt.innerHTML = key; // whatever property it has

                // then append it to the select element
                currFromSel.appendChild(opt);
            }
        })
    } catch (err) {
        alert(err + " was caught!");
    }
}


convertButton.addEventListener("click", () => {
    convertEm();

})

currTo.addEventListener("change", () => {
    ending = currToSel.value;
    console.log(ending);
})

currFrom.addEventListener("change", () => {
    beginning = currFromSel.value;
    console.log(beginning);
})

fromNum.addEventListener("input", () => {
    beginNum = fromNum.value;
    console.log(beginNum);
})



function convertEm() {
    let beginNumConv = beginNum / currMap[beginning];
    actualValue = beginNumConv * currMap[ending];
    let message = `$${beginNum} ${beginning} is equal to $${actualValue} ${ending}`;
    resultText.innerHTML = message;
}