"use strict";

// Elements Selection
const bill = document.getElementById("bill-input");
const peopleNum = document.getElementById("people-count");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const resetButton = document.getElementById("reset-btn");
const customTip = document.getElementById("custom-tip");
const buttons = document.querySelectorAll(".option");

const getBillVal = () => {
    return parseFloat(bill.value);
};

const getTipVal = () => {
    let selected = undefined;
    buttons.forEach(button => {
        if (button.classList.contains('--bg-selected')) {
            selected = button;
        }
    })
    return parseFloat(selected.value);
}

customTip.addEventListener('input', (event) => {
    updateDashboard();
})

const getPeopleNum = () => {
    return parseFloat(peopleNum.value);
}


const onTipSelection = (event) => {
    const selected = event.target;
    buttons.forEach(button => {
        button.classList.remove('--bg-selected');
    });
    selected.classList.add('--bg-selected');
    
    if (selected.id != 'custom-tip') {
        updateDashboard();        
    }
}

const updateDashboard = () => {
    const tipPrecent = (getTipVal() / 100);
    const billTip = (getBillVal() * tipPrecent)
    tipAmount.innerHTML = (billTip / getPeopleNum()).toFixed(2);
    totalAmount.innerHTML = ((getBillVal() + billTip) / getPeopleNum()).toFixed(2);
};

buttons.forEach(button => {
    button.addEventListener('click', onTipSelection);
})

bill.addEventListener('input', (event) => {
    updateDashboard();
})

peopleNum.addEventListener('input', (event) => {
    updateDashboard();
})

resetButton.addEventListener('click', () => {
    bill.value = 0;
    peopleNum.value = 1;
    buttons.forEach(button => {
        button.classList.remove('--bg-selected');
    })
    customTip.value = null;
})

