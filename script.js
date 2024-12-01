const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const billEl = $("#bill-input")
const peopleEl = $("#people-number-input")
const customTipEl = $(".custom-input")
const billError = $(".bill-error")
const peopleError = $(".people-error")
const tipError = $(".tip-error")
const buttons = $$(".btn-percent")
let tip = 0
let people = 0
let bill = 0

function reset(){
  billEl.value = ""
  peopleEl.value = ""
  customTipEl.value=""
  tip = 0
  people = 0
  bill = 0
  buttons.forEach(button=>button.classList.remove("clicked"))
  updateDashboard()
  tipError.textContent = ""
  peopleError.textContent = ""
  billError.textContent = ""

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

    if((inputEl.value).length === 0){
      updateCounter(0)
      updateDashboard();
    }
  });
}

validateInput(billEl, billError, "Can't be zero", "Cannot be negative", value => bill = value);
validateInput(peopleEl, peopleError, "Can't be zero", "Cannot be negative", value => people = value);

customTipEl.addEventListener("input", () => {
  if (parseInt(customTipEl.value) === 0) {
    tipError.textContent = "Can't be zero";
    customTipEl.classList.add("not-valid");
  } else if (parseInt(customTipEl.value) < 0) {
    tipError.textContent = "Cannot be negative";
    customTipEl.classList.add("not-valid");
  } 
  else {
    tipError.textContent = "";
    customTipEl.classList.remove("not-valid");
    buttons.forEach(button => button.classList.remove("clicked"))
    tip = customTipEl.value
    updateDashboard()
  }
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(button => button.classList.remove("clicked"))
    button.classList.add("clicked")
    tip = button.value
    updateDashboard()
  });
});
const tipAmount = $(".tip-amount")
const totalAmount = $(".total-amount")
const inputs = $$(".main-input")
const resetBtn = $(".reset-btn")
function updateDashboard(){
  console.log("people: ",people,"tip: ",tip,"bill: ",bill)
  if (people != 0 && tip != "" && bill != 0) {
    tipAmount.textContent = `$${(bill * (tip / 100) / people).toFixed(2)}`;
    totalAmount.textContent = `$${((bill + (bill * (tip / 100))) / people).toFixed(2)}`;
    resetBtn.classList.add("on")
    resetBtn.disabled = false


  } else {
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
    resetBtn.classList.remove("on")
    resetBtn.disabled = true

  }
}




