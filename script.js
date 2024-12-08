let bill;
let numOfPeople;
let tipPercentage;

const onBillChange = (e) => {
    bill = parseFloat(e.target.value);
    updateDisplay();
}


const onNumOfPeopleChange = (e) => {
    numOfPeople = parseInt(e.target.value);
    updateDisplay();
}


const onTipPercentageChange = (e) => {
    tipPercentage = parseFloat(e.target.value);
    if(e.target.classList.contains('tip-button')) {
        const customTip = document.getElementById('custom-tip-input');
        customTip.value = '';
    }
    updateDisplay();
}

const updateDisplay = () => {
    if (!bill || !numOfPeople || !tipPercentage) {
        return;
    }
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;

    const amountPerPerson = totalAmount / numOfPeople;
    const tipPerPerson = tipAmount / numOfPeople

    const tipButtons = document.getElementsByClassName('tip-button');
    for (let i = 0; i < tipButtons.length; i++) {
        if (parseInt(tipButtons[i].value) === tipPercentage) {
            tipButtons[i].classList.add('selected');
        }
        else {
            tipButtons[i].classList.remove('selected');
        }
    }
    document.getElementById('tip-amount').innerText = `${tipPerPerson.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `${amountPerPerson.toFixed(2)}`;
}

const reset = () => {
    bill = null;
    numOfPeople = null;
    tipPercentage = null;

    document.getElementById('bill-input').value = '';
    document.getElementById('people-input').value = '';

    document.getElementById('tip-amount').innerText = '0.00';
    document.getElementById('total-amount').innerText = '0.00';
}