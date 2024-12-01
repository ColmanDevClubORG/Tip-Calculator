const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const billInput = $('#bill');
const tipButtons = $$('.tip-button');
let customTipInput = $('.custom-tip');
const peopleInput = $('#people');
const resetButton = $('.reset');
const tipAmountDisplay = $('.TipAmount');
const totalAmountDisplay = $('.TotalAmount');
const errorMessageBill = $('.error-message-bill');
const errorMessagePerson = $('.error-message');

const validateInput = (input, messageElement, errorMessage, minValue) => {
  const value = parseFloat(input.value);
  if (value <= minValue) {
    messageElement.textContent = errorMessage;
    input.classList.add('error');
    return false;
  }
  messageElement.textContent = '';
  input.classList.remove('error');
  return true;
};

const calculateTipAmount = (bill, tipPercentage, people) => {
  return (bill * (tipPercentage / 100)) / people;
};

const calculateTotalAmount = (bill, tipPercentage, people) => {
  return (bill * (1 + tipPercentage / 100)) / people;
};

const updateDisplay = (tipAmount, totalAmount) => {
  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
};

const calculateTip = () => {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  let tipPercentage = 0;

  const selectedButton = $('.tip-button.selected');
  if (selectedButton) {
    tipPercentage = parseInt(selectedButton.textContent);
  } else if (customTipInput.value) {
    tipPercentage = parseFloat(customTipInput.value);
  }

  const isBillValid = validateInput(billInput, errorMessageBill, "Can't be zero", 0);
  const isPeopleValid = validateInput(peopleInput, errorMessagePerson, "Can't be zero", 0);

  if (!isBillValid || !isPeopleValid) {
    updateDisplay(0, 0);
    return;
  }

  const tipAmount = calculateTipAmount(bill, tipPercentage, people);
  const totalAmount = calculateTotalAmount(bill, tipPercentage, people);
  updateDisplay(tipAmount, totalAmount);
};

const clearTipButtonSelection = () => {
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
};

const handleTipButtonClick = (event) => {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    customTipInput.value = '';
  } else {
    clearTipButtonSelection();
    event.target.classList.add('selected');
    customTipInput.value = '';
  }
  calculateTip();
};

const handleCustomTipInput = () => {
  const customTipValue = parseFloat(customTipInput.value);
  if (customTipValue < 1) {
    customTipInput.value = '';
    customTipInput.classList.add('error');
    customTipInput.setAttribute('placeholder', 'Must be > 1');
  } else {
    customTipInput.classList.remove('error');
    customTipInput.setAttribute('placeholder', 'Custom');
    clearTipButtonSelection();
    calculateTip();
  }
};

const resetAll = () => {
  [billInput, customTipInput, peopleInput].forEach((input) => {
    input.value = '';
    input.classList.remove('error');
  });

  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  clearTipButtonSelection();
  errorMessageBill.textContent = '';
  errorMessagePerson.textContent = '';
};

const handleBillInputChange = () => {
  const isBillValid = parseFloat(billInput.value) > 0;
  if (isBillValid) {
    peopleInput.disabled = false;
    customTipInput.disabled = false;
    tipButtons.forEach((btn) => (btn.disabled = false));
  } else {
    peopleInput.disabled = true;
    customTipInput.disabled = true;
    tipButtons.forEach((btn) => (btn.disabled = true));
  }
  calculateTip();
};

const createTipButtons = () => {
  const tipSelectionContainer = $('.tip-selection');
  const tipPercentages = [5, 10, 15, 25, 50];

  tipPercentages.forEach((percentage) => {
    const button = document.createElement('button');
    button.classList.add('tip-button');
    button.textContent = `${percentage}%`;
    button.addEventListener('click', handleTipButtonClick);
    tipSelectionContainer.appendChild(button);
  });

  customTipInput = document.createElement('input');
  customTipInput.type = 'number';
  customTipInput.classList.add('custom-tip');
  customTipInput.id = 'custom-tip';
  customTipInput.placeholder = 'Custom';
  customTipInput.min = 0;
  customTipInput.addEventListener('input', handleCustomTipInput);
  tipSelectionContainer.appendChild(customTipInput);
};

const initializeListeners = () => {
  [billInput, customTipInput, peopleInput].forEach((input) =>
    input.addEventListener('input', calculateTip)
  );
  resetButton.addEventListener('click', resetAll);
};

createTipButtons();
initializeListeners();
