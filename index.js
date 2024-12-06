let bill = 0;
let numOfPeople = 0;

const billElement = document.getElementById('inputBill');
const numOfPeopleElement = document.getElementById('numOfPeople');
const tipAmountElement = document.getElementById('tipAmount');
const finalPriceElement = document.getElementById('totalPrice');

const getBill = (val) => {
    bill = val;
}

const getNumOfPeople = (val) => {
    numOfPeople = val;
}

const calculate = (val) => {

    let precents = 0;

    if (val.id === "custom") {
        precents = Math.floor(Math.random() * 50) + 1;
    }
    else {
        precents = val;

    }
    const tip = ((precents * bill) / 100) / numOfPeople;
    const final = (bill / numOfPeople) + tip;

    tipAmountElement.textContent = `$${tip.toFixed(2)}`;
    finalPriceElement.textContent = `$${final.toFixed(2)}`;
}


const reset = document.getElementById('resetBtn');
reset.addEventListener('click', () => {
    billElement.value = '';
    numOfPeopleElement.value = '';
    tipAmountElement.textContent = '0.00$';
    finalPriceElement.textContent = '0.00$';
})

