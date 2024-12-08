let tipPercentage = 0;

const SetTip = (tip) => {
  tipPercentage = tip;
  resetCustom();
  calculate();
};

const resetCustom=()=>{
  const customInput = document.getElementById('custom-tip');
    customInput.value = '';
    customInput.style.display = 'none';
    document.getElementById('custom-btn').style.display = 'inline';
};

document.getElementById('custom-btn').addEventListener('click', () => {
  const customInput = document.getElementById('custom-tip');
  document.getElementById('custom-btn').style.display = 'none'; 
  customInput.style.display = 'inline'; 
  customInput.focus(); 

  customInput.addEventListener('input', () => {
    const customTip = parseFloat(customInput.value) || 0; 
    tipPercentage = customTip;
    calculate();
  });

});

// calculation and update 
const calculate = () => {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
  const people = parseInt(document.getElementById('people').value);

  if (bill > 0 && people > 0 && tipPercentage >= 0) {
    const tipAmount = (bill * tipPercentage) / 100 / people;
    const total = (bill / people) + tipAmount;

    document.getElementById('tip-amount').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    
  } 
  else {
    // Reset values to $0.00 if bill or people are invalid
    document.getElementById('tip-amount').textContent = '$0.00';
    document.getElementById('total').textContent = '$0.00';
  }
};

const resetCalculator = () => {
  document.getElementById('bill').value = '';
  document.getElementById('people').value = '';
  document.getElementById('custom-tip').value = ''; 
  document.getElementById('tip-amount').textContent = '$0.00';
  document.getElementById('total').textContent = '$0.00';
  tipPercentage = 0;
  document.getElementById('custom-tip').style.display = 'none'; // Hide custom input field
  document.getElementById('custom-btn').style.display = 'inline'; // Show the "Custom" button again
};

document.getElementById('bill').addEventListener('input', calculate);
document.getElementById('people').addEventListener('input', calculate);
document.getElementById('reset-btn').addEventListener('click', resetCalculator);
