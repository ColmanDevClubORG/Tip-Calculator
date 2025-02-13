// DOM Selectors
const percentageButtons = document.querySelectorAll(
  ".inputs-section__tip-section--tip-selection-group button"
);
const customPercentageInput = document.querySelector(
  "#custom-percentage-input"
);
const fifteenPercentageButton = document.querySelector(
  '.inputs-section__tip-section--tip-selection-group button[value="15"]'
);
const billInput = document.querySelector("#bill-input");
const numberOfPeopleInput = document.querySelector("#number-of-people-input");
const tipAmountLabel = document.querySelector("#tip-amount");
const totalPriceLabel = document.querySelector("#total-price");
const billInputErrorMessage = document.querySelector("#bill-error-message");
const numberOfPeopleErrorMessage = document.querySelector(
  "#number-of-people-error-message"
);
const resetButton = document.querySelector("#reset-calculator-btn");

// Calculator Variables
let percentage;
let selectedPercentage;
let tipAmount;
let totalPrice;
let bill;
let numberOfPeople;

// Reset Calculator
const init = () => {
  if (selectedPercentage) toggleActivePercentage();
  percentage = 15;
  tipAmount = 0.0;
  totalPrice = 0.0;
  bill = 0;
  numberOfPeople = 1;
  selectedPercentage = fifteenPercentageButton;

  // Reset UI
  billInput.value = "";
  numberOfPeopleInput.value = 1;
  customPercentageInput.value = "";
  tipAmountLabel.textContent = tipAmount.toFixed(2);
  totalPriceLabel.textContent = totalPrice.toFixed(2);
  toggleActivePercentage();
};

const toggleInputError = (inputElement, errorElement, message) => {
  if (message) {
    // Add Error Message
    inputElement.classList.add("form__input--error");
    errorElement.classList.remove("hidden");
    errorElement.textContent = message;
  } else {
    // Remove Error Message
    inputElement.classList.remove("form__input--error");
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
  }
};

// Percentage Handlers
const toggleActivePercentage = () => {
  if (selectedPercentage.classList.contains("btn-selected"))
    selectedPercentage.classList.remove("btn-selected");
  else selectedPercentage.classList.add("btn-selected");
};

const onTipSelectionClick = (e) => {
  toggleActivePercentage();
  percentageButtons.forEach((button) => {
    if (button.value === e.target.value) selectedPercentage = button;
  });
  percentage = selectedPercentage.value;
  customPercentageInput.value = "";
  toggleActivePercentage();
  calculateTip();
};

percentageButtons.forEach((button) => {
  button.addEventListener("click", onTipSelectionClick);
});

const onCustomPercentageChange = (e) => {
  const percentageInputValue = parseFloat(e.target.value);
  if (
    percentageInputValue &&
    percentageInputValue !== "" &&
    percentageInputValue > 0
  ) {
    toggleActivePercentage();
    selectedPercentage = customPercentageInput;
    toggleActivePercentage();
    percentage = percentageInputValue;
  } else {
    // Invalid input or empty text - return to default (15%) - NaN == False
    toggleActivePercentage();
    selectedPercentage = fifteenPercentageButton;
    percentage = 15;
    e.target.value = "";
    toggleActivePercentage();
  }
  calculateTip();
};

// Custom Percentage Input Handler
customPercentageInput.addEventListener("change", onCustomPercentageChange);

// Bill Input Handler
const onBillChangeHandler = (e) => {
  let billValue = e.target.value;
  if (billValue == "" || billValue <= 0) {
    bill = 0;
    billInput.value = "";
    // Display Error Message
    toggleInputError(e.target, billInputErrorMessage, "Can't Be 0 or Less");
  } else {
    toggleInputError(e.target, billInputErrorMessage, "");
    bill = Number(billValue);
    calculateTip();
  }
};

// Number of People Input Handler
const onNumberOfPeopleInputChange = (e) => {
  let numberOfPeopleValue = e.target.value;
  if (numberOfPeopleValue == "" || numberOfPeopleValue <= 0) {
    numberOfPeople = 0;
    numberOfPeopleInput.value = 1;
    // Display Error Message
    toggleInputError(
      e.target,
      numberOfPeopleErrorMessage,
      "Can't Be 0 or Less"
    );
  } else {
    toggleInputError(e.target, numberOfPeopleErrorMessage, "");
    numberOfPeople = Number(numberOfPeopleValue);
    calculateTip();
  }
};

billInput.addEventListener("change", onBillChangeHandler);
numberOfPeopleInput.addEventListener("change", onNumberOfPeopleInputChange);

// Calculate Values
const calculateTip = () => {
  if (bill > 0) {
    // Valid Bill
    tipAmount = bill * (percentage / 100);
    totalPrice = bill + tipAmount;
  } else {
    // Invalid Bill
    tipAmount = 0;
    totalPrice = 0;
  }

  // Update UI
  tipAmountLabel.textContent = (tipAmount / numberOfPeople).toFixed(2);
  totalPriceLabel.textContent = (totalPrice / numberOfPeople).toFixed(2);
};

// Reset Button Handler
resetButton.addEventListener("click", init);

// Start the Calculator
init();
