export const calculateAmount = (flag, bill, tipPercentage, people) => {
    return (bill * (flag + tipPercentage / 100)) / people;
};

export const resetInputs = (inputs) => {
    inputs.forEach((input) => {
        input.value = '';
        input.classList.remove('error');
    });
};

export const updateDisplay = (tipAmountElement, totalAmountElement, tipAmount, totalAmount) => {
    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
};
