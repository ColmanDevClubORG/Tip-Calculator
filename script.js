const state = {
    bill: 0,
    tipPercentage: 0,
    peopleNumber: 1,
};

// Helper to get the input value or default to 0
const getInputValue = (id) => parseFloat(document.getElementById(id).value) || 0;

// Helper to update the displayed amounts
const updateDisplay = (id, value) => {
    document.getElementById(id).textContent = `${value.toFixed(2)}$`;
};

// Helper to toggle error classes
const toggleError = (id, condition) => {
    const wrapper = document.getElementById(id).closest('.input-wrapper');
    wrapper?.classList.toggle('error', condition);
};

// Helper to clear all selected states
const clearSelection = () => {
    document.querySelectorAll('.tip-button').forEach(button => button.classList.remove('selected'));
    document.getElementById('custom-tip').classList.remove('selected');
};

// Reset the state and UI
const resetStateAndUI = () => {
    Object.assign(state, { bill: 0, tipPercentage: 0, peopleNumber: 1 });
    ['bill', 'people', 'custom-tip'].forEach(id => document.getElementById(id).value = '');
    updateDisplay('tip-amount', 0);
    updateDisplay('total-amount', 0);
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    clearSelection();
};

// Validate inputs
const validateInputs = () => {
    const { bill, peopleNumber } = state;
    toggleError('bill', bill <= 0);
    toggleError('people', peopleNumber <= 0);
    return bill > 0 && peopleNumber > 0;
};

// Calculate and update the tip and total amounts
const calculateTip = () => {
    if (!validateInputs()) return;

    const { bill, tipPercentage, peopleNumber } = state;

    const tipAmount = (bill * tipPercentage) / peopleNumber;
    const totalAmount = bill / peopleNumber + tipAmount;

    updateDisplay('tip-amount', tipAmount);
    updateDisplay('total-amount', totalAmount);
};

// Handle tip selection (buttons or custom input)
const handleTipSelection = (value, isCustom = false) => {
    clearSelection();
    if (isCustom) {
        state.tipPercentage = parseFloat(value) / 100 || 0;
        document.getElementById('custom-tip').classList.add('selected');
    } else {
        state.tipPercentage = parseFloat(value.dataset.value) || 0;
        value.classList.add('selected');
    }
    calculateTip();
};

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bill').addEventListener('input', () => {
        state.bill = getInputValue('bill');
        calculateTip();
    });

    document.getElementById('people').addEventListener('input', () => {
        state.peopleNumber = getInputValue('people');
        calculateTip();
    });

    document.querySelector('.tip-buttons').addEventListener('click', (e) => {
        if (e.target.classList.contains('tip-button')) {
            handleTipSelection(e.target);
            document.getElementById('custom-tip').value = ''; // Clear custom tip input
        }
    });

    document.getElementById('custom-tip').addEventListener('input', (e) => {
        const customTip = parseFloat(e.target.value);
        if (!isNaN(customTip)) {
            handleTipSelection(customTip, true);
        }
    });

    document.querySelector('.reset').addEventListener('click', resetStateAndUI);
});
