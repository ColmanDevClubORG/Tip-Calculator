let bill;
let tipAmount;
let tipPercentage;
let totalAmount;
let peopleNumber;


const reset = () => {
    const elements = document.getElementsByClassName('amount');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = '0.00$';
    }
};

const calculateTip = (value) => {
    bill = parseFloat(document.getElementById('bill').value);
    tipPercentage = parseFloat(value);
    peopleNumber = parseFloat(document.getElementById('people').value);

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(peopleNumber)) {
        alert('Please fill all fields');
        return;
    }
    tipAmount = (bill * tipPercentage) / peopleNumber;
    totalAmount = bill / peopleNumber + tipAmount;

    document.getElementById('tip-amount').textContent = tipAmount.toFixed(2) + '$';
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2) + '$';
}
