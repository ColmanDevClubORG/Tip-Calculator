
let selectedPercentage = 0;

const calculateTipAmount = (percentage, bill, numOfPeople) => {
  return ((percentage * bill) / 100) / numOfPeople;
};

const onPercentageClicked = (element) => {
  selectedPercentage = element.value;
  updateCalculation();
};

const onCustomInput = () => {
  selectedPercentage = document.getElementById("customInput").value;
  updateCalculation();
};

const onCustomNumOfPeopleInput=()=>{
    numOfPeople = document.getElementById("Num_of_People").value;
    updateCalculation();
};

const updateCalculation = () => {
  const bill = document.getElementById("BillInput").value;
  const numOfPeople = document.getElementById("Num_of_People").value;

  if (numOfPeople <= 0) {
    alert("Number of people cannot be zero or less!");
    return;
  }

  const tipAmount = calculateTipAmount(selectedPercentage, bill, numOfPeople);
  const totalAmount = (bill / numOfPeople) + tipAmount;

  document.getElementById("tipAmount").getElementsByClassName('res')[0].innerText = tipAmount;
  document.getElementById("total").getElementsByClassName('res')[0].innerText = totalAmount;
};

const reset = () => {
  document.getElementById("BillInput").value = "";
  document.getElementById("Num_of_People").value = "";
  document.getElementById("customInput").value = "";
  selectedPercentage = 0;

  document.getElementById("tipAmount").getElementsByClassName('res')[0].innerText = "$0.00";
  document.getElementById("total").getElementsByClassName('res')[0].innerText = "$0.00";
};