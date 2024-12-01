const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.querySelector('.custom-tip');
const tipAmountDisplay = document.querySelector('.tip-amount-total div:first-child .amount');
const totalDisplay = document.querySelector('.tip-amount-total div:last-child .amount');
const resetBtn = document.querySelector('.reset-btn');

let tipPercent = 0;

tipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tipButtons.forEach(b => b.style.backgroundColor = ''); 
        btn.style.backgroundColor = 'hsl(172, 67%, 45%)'; 
        customTipInput.value = ''; 
        tipPercent = parseInt(btn.dataset.tip);
        calculateTotal();
    });
});

customTipInput.addEventListener('input', (e) => {
    tipButtons.forEach(btn => btn.style.backgroundColor = ''); 
    tipPercent = parseInt(e.target.value) || 0;
    calculateTotal();
});

function calculateTotal() {
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;
    
    const tipAmount = (bill * (tipPercent / 100)) / people;
    const total = (bill / people) + tipAmount;
    
    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}


billInput.addEventListener('input', calculateTotal);
peopleInput.addEventListener('input', calculateTotal);

resetBtn.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    tipPercent = 0;
    tipButtons.forEach(btn => btn.style.backgroundColor = '');
    tipAmountDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
});