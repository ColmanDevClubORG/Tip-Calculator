const bill = document.getElementById("bill-input");
const peopleNum = document.getElementById("people-count");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const resetButton = document.getElementById("reset-btn");
const customTip = document.getElementById("b-custm");

const buttons = document.querySelectorAll(".option");


// onClick Handlers
function selectOption(b) {
    let selected = b.target;
    buttons.forEach((others) => {
        others.classList.remove('--bg-selected')
    });
    selected.classList.add('--bg-selected');
    calcTip();
    console.log(calcTip());
}

buttons.forEach( b => {
    b.addEventListener("click", selectOption)
})

function customChange(b) {
    calcTip();
}
// Custom Tip Event Handler
customTip.addEventListener("input", customChange);


function getSelectedTip() {
    const selected =  document.getElementsByClassName("option --bg-selected")[0];
    if (selected.id != 'b-custm') {
        return parseInt(selected.getAttribute('value'));
    } else {
        return parseFloat(selected.value);
    }
}

function getPeopleNum() {
    return parseInt(peopleNum.value);
}



function calcTip(e) {
    let newTip = parseFloat(bill.value) * (getSelectedTip() / 100) / getPeopleNum();
    tipAmount.innerHTML = newTip.toFixed(2);
    let newTotal = (parseFloat(bill.value) / getPeopleNum()) + newTip;
    totalAmount.innerHTML = newTotal.toFixed(2);
}

function onInput(e) {
    calcTip();
}

peopleNum.addEventListener("input", onInput);
bill.addEventListener("input", onInput)

function resetAll(e) {
    bill.value = 0;
    peopleNum.value = 0;
    tipAmount.innerHTML = Number(0).toFixed(2);
    totalAmount.innerHTML = Number(0).toFixed(2);
}

// Reset Button
resetButton.addEventListener('click', resetAll);