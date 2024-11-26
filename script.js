const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const billInput = $('#bill');
const tipButtons = $$('.tip-button');
const customTipInput = $('.custom-tip');
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

const calculateAmounts = (bill, tipPercentage, people) => {
  const tipAmount = (bill * (tipPercentage / 100)) / people;
  const totalAmount = (bill * (1 + tipPercentage / 100)) / people;
  return { tipAmount, totalAmount };
};

const updateDisplay = (tipAmount, totalAmount) => {
  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
};

const calculateTip = (tipPercentage) => {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  const isBillValid = validateInput(billInput, errorMessageBill, "Can't be zero", 0);
  const isPeopleValid = validateInput(peopleInput, errorMessagePerson, "Can't be zero", 0);

  if (!isBillValid || !isPeopleValid) {
    updateDisplay(0, 0);
    return;
  }

  const { tipAmount, totalAmount } = calculateAmounts(bill, tipPercentage, people);
  updateDisplay(tipAmount, totalAmount);
};

const handleTipButtonClick = (event) => {
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
  event.target.classList.add('selected');
  customTipInput.value = '';
  calculateTip(parseFloat(event.target.textContent));
};

const handleCustomTipInput = () => {
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
  const tipPercentage = parseFloat(customTipInput.value) || 0;
  calculateTip(tipPercentage);
};

const resetAll = () => {
  [billInput, customTipInput, peopleInput].forEach((input) => {
    input.value = '';
    input.classList.remove('error');
  });

  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
  errorMessageBill.textContent = '';
  errorMessagePerson.textContent = '';
};

const initializeListeners = () => {
  tipButtons.forEach((button) =>
    button.addEventListener('click', handleTipButtonClick)
  );
  [billInput, customTipInput, peopleInput].forEach((input) =>
    input.addEventListener('input', handleCustomTipInput)
  );
  resetButton.addEventListener('click', resetAll);
};

initializeListeners();
