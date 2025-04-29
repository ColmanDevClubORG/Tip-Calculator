let billAmount = 0;
let numOfPeople = 1;
let tipPercentage = 0;

function updateBill() {
    const billInput = document.getElementById('billInput').value;
    billAmount = parseFloat(billInput) || 0; // Converts the input into a number using parseFloat() or default to 0
    calculateTip();
}

function updatePeople() {
    const peopleInput = document.getElementById('NumberOfPeopleInput').value;
    numOfPeople = parseInt(peopleInput) || 1; // Converts the input into a number using parseFloat() or default to 1
    calculateTip();
}

function getTipButton(ele) {
    const buttons = document.querySelectorAll('.tipButton');
    buttons.forEach((button) => button.classList.remove('selected'));

    ele.classList.add('selected');
    tipPercentage = parseFloat(ele.innerText.replace('%', '')) / 100;

    document.getElementById('customButton').value = '';
    calculateTip();
}


function calculateTip() {
    if (numOfPeople === 0) {
        alert("Number of people can't be zero.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / numOfPeople;
    const totalAmount = (billAmount / numOfPeople) + tipAmount;

    document.querySelector('.amountOfTheTip').innerText = `$${tipAmount.toFixed(2)}`;
    document.querySelector('.amountOfTheTotal').innerText = `$${totalAmount.toFixed(2)}`;
}

function selectCustomTip(ele) {
    const buttons = document.querySelectorAll('.tipButton');
    buttons.forEach((button) => button.classList.remove('selected'));

    ele.classList.add('selected');
}

function customTipHandler(ele) {
    const customValue = parseFloat(ele.value) || 0;

    if (customValue > 0) {
        tipPercentage = customValue / 100;
    } else {
        tipPercentage = 0;
    }

    calculateTip();
}


function Reset() {
    billAmount = 0;
    numOfPeople = 1;
    tipPercentage = 0;

    document.getElementById('billInput').value = '';
    document.getElementById('NumberOfPeopleInput').value = '';
    document.getElementById('customButton').value = '';
    document.querySelector('.amountOfTheTip').innerText = '$0.00';
    document.querySelector('.amountOfTheTotal').innerText = '$0.00';

    const buttons = document.querySelectorAll('.tipButton');
    buttons.forEach((button) => button.classList.remove('selected'));
}