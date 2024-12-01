const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


const elements = {
   billEl: $("#bill-input"),
   peopleEl: $("#people-number-input"),
   customTipEl: $(".custom-input"),
   billError: $(".bill-error"),
   peopleError: $(".people-error"),
   tipError: $(".tip-error"),
   tipAmount: $(".tip-amount"),
   totalAmount: $(".total-amount"),
   resetBtn: $(".reset-btn"),
   inputs: $$(".main-input"),
   buttons : $$(".btn-percent"),
}

let tip = 0
let people = 0
let bill = 0

function reset(){
  elements.billEl.value = ""
  elements.peopleEl.value = ""
  elements.customTipEl.value=""
  tip = 0
  people = 0
  bill = 0
  elements.buttons.forEach(button=>button.classList.remove("clicked"))
  updateDashboard()
  elements.tipError.textContent = ""
  elements.peopleError.textContent = ""
  elements.billError.textContent = ""
}

function validateInput(inputEl, errorEl, errorMessageZero, errorMessageNegative, updateCounter) {
  inputEl.addEventListener("input", () => {
    if (parseInt(inputEl.value) === 0) {
      errorEl.textContent = errorMessageZero;
      inputEl.classList.add("not-valid");
    } else if (parseInt(inputEl.value) < 0) {
      errorEl.textContent = errorMessageNegative;
      inputEl.classList.add("not-valid");
    } 
    else {
      errorEl.textContent = "";
      inputEl.classList.remove("not-valid");
      updateCounter(parseFloat(inputEl.value));
      updateDashboard();
    }

    if((elements.inputEl.value).length === 0){
      updateCounter(0)
      updateDashboard();
    }
  });
}

validateInput(elements.billEl, elements.billError, "Can't be zero", "Cannot be negative", value => bill = value);
validateInput(elements.peopleEl, elements.peopleError, "Can't be zero", "Cannot be negative", value => people = value);

elements.customTipEl.addEventListener("input", () => {
  if (parseInt(elementscustomTipEl.value) === 0) {
    elementstipError.textContent = "Can't be zero";
    customTipEl.classList.add("not-valid");
  } else if (parseInt(elements.customTipEl.value) < 0) {
    elements.tipError.textContent = "Cannot be negative";
    elements.customTipEl.classList.add("not-valid");
  } 
  else {
    elements.tipError.textContent = "";
    elements.customTipEl.classList.remove("not-valid");
    elements.buttons.forEach(button => button.classList.remove("clicked"))
    tip = elements.customTipEl.value
    updateDashboard()
  }
});

elements.buttons.forEach(button => {
  button.addEventListener("click", () => {
    elements.buttons.forEach(button => button.classList.remove("clicked"))
    button.classList.add("clicked")
    tip = button.value
    updateDashboard()
  });
});

function updateDashboard(){
  if (people != 0 && tip != "" && bill != 0) {
    elements.tipAmount.textContent = `$${(bill * (tip / 100) / people).toFixed(2)}`;
    elements.totalAmount.textContent = `$${((bill + (bill * (tip / 100))) / people).toFixed(2)}`;
    elements.resetBtn.classList.add("on")
    elements.resetBtn.disabled = false
  } else {
    elements.tipAmount.textContent = `$0.00`;
    elements.totalAmount.textContent = `$0.00`;
    elements.resetBtn.classList.remove("on")
    elements.resetBtn.disabled = true
  }
}




