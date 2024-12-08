let billAmt = 0;
let tipPrc = 0;
let customTip = 0;

document.getElementById("bill-input").addEventListener("input", (event) => {
  billAmt = event.target.value;
});

document.querySelectorAll(".tip-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttons = document.querySelectorAll(".tip-button");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    tipPrc = event.target.dataset.tip;
    customTip = 0;
  });
});

const showTipAmount = (event) => {
  const numOfPeople = event.target.value;
  if (tipPrc === 0 || tipPrc === undefined) {
    tipPrc = customTip / 100 + 1;
  }

  if (billAmt <= 0 || tipPrc < 0 || tipPrc === undefined || numOfPeople <= 0) {
    alert(
      "Please enter a valid bill amount, number of people and tip percentage."
    );
    return;
  }

  const totalBill = calculateBill(billAmt, tipPrc);
  const totalBillPerPerson = totalBill / numOfPeople;
  const totalTipPerPerson = (totalBill - billAmt) / numOfPeople;
  const currentBillAmount = document.getElementById("total");
  const currentTipAmount = document.getElementById("tip");
  currentBillAmount.innerHTML = totalBillPerPerson.toFixed(2);
  currentTipAmount.innerHTML = totalTipPerPerson.toFixed(2);
};

const customTipAmount = (event) => {
  customTip = event.target.value;
};

const calculateBill = (billAmt, tipPrc) =>  billAmt * tipPrc;

const resetCalc = () => {
  document.getElementById("bill-input").value = "";
  document.getElementById("people").value = "";
  document.getElementById("custom").value = "";
  document.getElementById("total").innerHTML = "0.00";
  document.getElementById("tip").innerHTML = "0.00";
  const buttons = document.querySelectorAll(".tip-button");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  tipPrc = 0;
  customTip = 0;
  billAmt = 0;
};
