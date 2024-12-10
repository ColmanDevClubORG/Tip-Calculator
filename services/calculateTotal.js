
const calculateTotal = (inputs) => {
    const tipAmount = document.getElementById('tip-amount');
    const peopleAmount = document.getElementById('people-amount');

    const billAmount = inputs.bill;
    const tipPercent = inputs.tip / 100;
    const totalTip = billAmount * tipPercent;

    const totalAmount = billAmount + totalTip;
    const totalPerPerson =  totalAmount/inputs.people;

    tipAmount.innerHTML = `$${totalTip.toFixed(2)}`;
    peopleAmount.innerHTML = `$${totalPerPerson.toFixed(1)}`;
}




