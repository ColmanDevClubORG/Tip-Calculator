import { calculateAmount, resetInputs, updateDisplay } from './services/Calculator.js';
import { createTipButtons, clearTipButtonSelection } from './services/buttons.js';
import { validateInput } from './services/Validator.js'

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const billInput = $('#bill');
const peopleInput = $('#people');
const tipButtons = $$('.tip-button');
const resetButton = $('.reset');
const tipAmountDisplay = $('.TipAmount');
const totalAmountDisplay = $('.TotalAmount');
const errorMessageBill = $('.error-message-bill');
const errorMessagePerson = $('.error-message');

let customTipInput;
const FLAG_TIP = 0;
const FLAG_TOTAL = 1;

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
    updateDisplay(tipAmountDisplay, totalAmountDisplay, 0, 0);
    return;
  }

  const tipAmount = calculateAmount(FLAG_TIP, bill, tipPercentage, people);
  const totalAmount = calculateAmount(FLAG_TOTAL, bill, tipPercentage, people);
  updateDisplay(tipAmountDisplay, totalAmountDisplay, tipAmount, totalAmount);
};

const handleTipButtonClick = (event) => {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    customTipInput.value = '';
  } else {
    clearTipButtonSelection(tipButtons);
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
    clearTipButtonSelection(tipButtons);
    calculateTip();
  }
};

const resetAll = () => {
  resetInputs([billInput, customTipInput, peopleInput]);
  updateDisplay(tipAmountDisplay, totalAmountDisplay, 0, 0);
  const tipButtons = $$('.tip-button');
  clearTipButtonSelection(tipButtons);
  errorMessageBill.textContent = '';
  errorMessagePerson.textContent = '';
};

const initializeListeners = () => {
  [billInput, customTipInput, peopleInput].forEach((input) =>
    input.addEventListener('input', calculateTip)
  );
  resetButton.addEventListener('click', resetAll);
};

const initializeTipCalculator = () => {
  const tipSelectionContainer = $('.tip-selection');
  const tipPercentages = [5, 10, 15, 25, 50];
  customTipInput = createTipButtons(tipSelectionContainer, tipPercentages, handleTipButtonClick, customTipInput, handleCustomTipInput);
  initializeListeners();
};

initializeTipCalculator();
