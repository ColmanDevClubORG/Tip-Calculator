
const calculateTotal = (inputs) => {
    const tipAmount = document.getElementById('tip-amount');
    const peopleAmount = document.getElementById('people-amount');

    const billAmount = inputs.bill;
    const tipPercent = inputs.tip / 100;
    const totalTipPerson = billAmount * tipPercent / inputs.people;

    const totalAmountPerson = billAmount / inputs.people;
    const totalPerPerson =  totalAmountPerson + totalTipPerson;

    tipAmount.innerHTML = `$${totalTipPerson.toFixed(2)}`;
    peopleAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}




