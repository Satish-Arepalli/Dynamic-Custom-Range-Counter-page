let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");

function displayNumbers(fromValue, toValue) {
    let current = fromValue;
    counterTextEl.textContent = current;

    let timerId = setInterval(function() {
        if (current < toValue) {
            current += 1;
            counterTextEl.textContent = current;
        } else {
            clearInterval(timerId);
            counterTextEl.textContent = "";
        }
    }, 1000);
}

startBtnEl.onclick = function() {
    if (fromUserInputEl.value === "") {
        alert("Enter the from value");
    } else if (toUserInputEl.value === "") {
        alert("Enter the to value");
    } else {
        let fromValue = parseInt(fromUserInputEl.value);
        let toValue = parseInt(toUserInputEl.value);

        displayNumbers(fromValue, toValue);
    }
}