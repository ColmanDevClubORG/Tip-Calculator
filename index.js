class Calculator {

  billInput;
  numOfPeopleInput;
  customTipInput;
  resetBtn;

  tipsContainer;
  tipPercentage = null;

  constructor() {

    this.billInput = document.querySelector("#amountOfBill");
    this.numOfPeopleInput = document.querySelector("#numOfPeople");    
    this.resetBtn = document.querySelector('.reset-button');
    this.customTipInput = document.querySelector('.customTip');
    this.tipsContainer = document.querySelector('.tip-buttons');

    this.initEventListeners();
  }

  initEventListeners() {

    this.billInput.addEventListener('keyup', this.handleBillInputChange.bind(this));

    this.numOfPeopleInput.addEventListener('keyup', this.handleNumOfPeopleInputChange.bind(this));

    this.customTipInput.addEventListener('keyup', this.handleCustomTipChange.bind(this))

    this.tipsContainer.addEventListener('click', this.handleTipsContainerClick.bind(this));

    this.resetBtn.addEventListener('click', this.handleReset.bind(this));

  }

  handleCustomTipChange(e) {
    this.tipPercentage = parseFloat(this.customTipInput.value);
    // console.log('hello from customtip')
    this.tipsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));

    this.calculateTip();
  }

  handleBillInputChange(e) {
    console.log(e.target.value)
    this.calculateTip();
  }

  handleNumOfPeopleInputChange(e) {
    console.log(e.target.value)
    this.calculateTip();
  }

  handleTipsContainerClick(e) {
    if(!e.target.closest(".tipButton")) return;
    
    const tipClicked = e.target;

    this.tipPercentage = tipClicked.getAttribute('data-tip');

    this.customTipInput.value = '';

    this.tipsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));

    tipClicked.classList.add('active');

    this.calculateTip();
  }

  calculateTip() {
    
    const billAmount = parseFloat(this.billInput.value);
    const numOfPeople = parseFloat(this.numOfPeopleInput.value);
    const tipPercentage = parseFloat(this.tipPercentage);

    if(!billAmount || !numOfPeople || !tipPercentage) return;

    const tipAmount = billAmount * tipPercentage/100;

    const tipPerPerson = tipAmount/numOfPeople;
    
    const tipAmountEl = document.querySelector('.output-container .tip-amount .tip-amount-output');

    tipAmountEl.innerText = `$${tipPerPerson.toFixed(2)}`

    this.calculateTotal(billAmount, tipAmount);
  }

  calculateTotal(bill, tip) {

    const totalAmountEl = document.querySelector('.output-container .total-amount .total-amount-output')

    totalAmountEl.innerText = `$${(bill + tip).toFixed(2)}`

  }

  handleReset() {

    // reset all inputs
    document.querySelectorAll('input').forEach(input => input.value = '');
    this.tipPercentage = null;
    
    this.tipsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));


    const tipAmountEl = document.querySelector('.output-container .tip-amount .tip-amount-output');
    const totalAmountEl = document.querySelector('.output-container .total-amount .total-amount-output')

    tipAmountEl.value = '$0.0';
    totalAmountEl.value = '$0.0';

  }

}


document.addEventListener('DOMContentLoaded', function() {
  const calculator = new Calculator();
})