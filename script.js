const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
let tip = 0
let people = 0
let bill = 0

const elements = {
  billEl: $("#bill-input"),
  peopleEl: $("#people-number-input"),
  customTipEl: $(".custom-input"),
  billError: $(".bill-error"),
  peopleError: $(".people-error"),
  tipError: $(".tip-error"),
  tipAmountEl: $(".tip-amount"),
  totalAmountEl: $(".total-amount"),
  resetBtn: $(".reset-btn"),
  inputs: $$(".main-input"),
  percentButtons: $$(".btn-percent"),
}

const errorMessages = {
  zeroError: "Can't be zero",
  fractureNumberError: "Cannot be fractured number",
  negativeError: "Cannot be negative",
}

function reset() {
  const { billEl, peopleEl, customTipEl, billError, peopleError, tipError, percentButtons } = elements

  billEl.value = ""
  peopleEl.value = ""
  customTipEl.value = ""
  tipError.textContent = ""
  peopleError.textContent = ""
  billError.textContent = ""

  tip = 0
  people = 0
  bill = 0

  percentButtons.forEach(button => button.classList.remove("clicked"))
  updateDashboard()
}

function validateInput(inputEl, errorEl, updateCounter) {
  const { percentButtons } = elements
  const { zeroError, fractureNumberError, negativeError } = errorMessages
  inputEl.addEventListener("input", () => {
    if ((inputEl.value).length === 0) {
      updateCounter(0)
      updateDashboard();
    }
    else if (parseInt(inputEl.value) === 0) {
      errorEl.textContent = zeroError;
      inputEl.classList.add("not-valid");
    } else if (parseInt(inputEl.value) < 0) {
      errorEl.textContent = negativeError;
      inputEl.classList.add("not-valid");
    } else if ((inputEl.id == "people-number-input") && (parseFloat((inputEl.value) % 1) !== 0)) {
      errorEl.textContent = fractureNumberError;
      inputEl.classList.add("not-valid");
      people = 0
      updateDashboard();
    }
    else {
      errorEl.textContent = "";
      inputEl.classList.remove("not-valid");
      updateCounter(parseFloat(inputEl.value));
      updateDashboard();
    }
    if (inputEl.classList[0] == "custom-input") {
      percentButtons.forEach(button => button.classList.remove("clicked"))
    }
  });
}

validateInput(elements.billEl, elements.billError, value => bill = value);
validateInput(elements.peopleEl, elements.peopleError, value => people = value);
validateInput(elements.customTipEl, elements.tipError, value => tip = value);


elements.percentButtons.forEach(button => {
  const { percentButtons,customTipEl,tipError } = elements
  button.addEventListener("click", () => {
    customTipEl.value = ""
    tipError.textContent = "" 
    customTipEl.classList.remove("not-valid")
    percentButtons.forEach(button => button.classList.remove("clicked"))
    button.classList.add("clicked")
    tip = button.value
    updateDashboard()
  });
});

function updateDashboard() {
  const { tipAmountEl, totalAmountEl, resetBtn } = elements
  const valid = (people != 0 && tip != 0 && bill != 0)
  
  const totalTip = Number((bill * (tip / 100)).toFixed(2))
  const tipAmountPerPerson = (totalTip / people).toFixed(2)
  const totalAmountPerPerson = ((bill + totalTip) / people).toFixed(2)

  if (valid) {
    tipAmountEl.textContent = `$${tipAmountPerPerson}`;
    totalAmountEl.textContent = `$${totalAmountPerPerson}`;
    resetBtn.classList.add("on")
    resetBtn.disabled = false
  } else {
    tipAmountEl.textContent = `$0.00`;
    totalAmountEl.textContent = `$0.00`;
    resetBtn.classList.remove("on")
    resetBtn.disabled = true
  }
}




