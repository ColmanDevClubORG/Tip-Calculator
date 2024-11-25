const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-button');
const customTipInput = document.querySelector('.custom-tip');
const peopleInput = document.getElementById('people');
const resetButton = document.querySelector('.reset');
const tipAmountDisplay = document.querySelector('.TipAmount');
const totalAmountDisplay = document.querySelector('.TotalAmount');
const errorMessageBill = document.querySelector('.error-message-bill');
const errorMessagePerson = document.querySelector('.error-message');

const showError = (input, messageElement, message) => {
  if (parseFloat(input.value) < (input === peopleInput ? 1 : 0)) {
    messageElement.innerText = message;
    input.classList.add('error');
    return true;
  }
  messageElement.innerText = '';
  input.classList.remove('error');
  return false;
};

const calculateTip = (tipPercentage) => {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  const isBillInvalid = showError(billInput, errorMessageBill, "Can't be zero");
  const isPeopleInvalid = showError(peopleInput, errorMessagePerson, "Can't be zero");
  if (isBillInvalid || isPeopleInvalid) {
    tipAmountDisplay.innerText = '$0.00';
    totalAmountDisplay.innerText = '$0.00';
    return;
  }

  const tipAmount = (bill * (tipPercentage / 100)) / people;
  const totalAmount = (bill * (1 + tipPercentage / 100)) / people;

  tipAmountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.innerText = `$${totalAmount.toFixed(2)}`;
};

const handleTipButtonClick = (event) => {
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
  event.target.classList.add('selected');
  customTipInput.value = '';
  calculateTip(parseFloat(event.target.innerText));
};

const handleInput = () => {
  const selectedButton = document.querySelector('.tip-button.selected');
  const tipPercentage = selectedButton
    ? parseFloat(selectedButton.innerText)
    : parseFloat(customTipInput.value) || 0;
  calculateTip(tipPercentage);
};

const resetAll = () => {
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '';
  tipAmountDisplay.innerText = '$0.00';
  totalAmountDisplay.innerText = '$0.00';
  tipButtons.forEach((btn) => btn.classList.remove('selected'));
  errorMessageBill.innerText = '';
  errorMessagePerson.innerText = '';
  billInput.classList.remove('error');
  peopleInput.classList.remove('error');
};

tipButtons.forEach((button) => button.addEventListener('click', handleTipButtonClick));
[billInput, customTipInput, peopleInput].forEach((input) =>
  input.addEventListener('input', handleInput)
);
resetButton.addEventListener('click', resetAll);
