let bill = 0; // Bill amount
let pplAmount = 1; // Number of people
let tipPercent = 0; // Default tip percent (0%)
let tipPerPerson = 0; // Tip amount per person
let totalPerPerson = 0;

const tipButtons = document.querySelectorAll(".tip-button");
const billInput = document.getElementById("bill");


const onBillCng =(event) => {
    bill=parseFloat(event.target.value) || 0;
    AmountsUpdate()
    console.log("bill=" + bill)
};
const onPplCng =(event) => {
    pplAmount=parseFloat(event.target.value) || 1;
    AmountsUpdate()
    console.log("pplAmount=" + pplAmount)
};
document.getElementById("bill").addEventListener("input", onBillCng);
document.getElementById("people").addEventListener("input", onPplCng);


// Percent Choosing (Listener + Function)
let lastClickedButton = null; // Variable to store the last clicked button
onPercentClick =(event) =>{
    const clickedButton = event.target;

    // If the same button is clicked again, reset its color and tipPercent
    if (lastClickedButton === clickedButton) {
        clickedButton.style.backgroundColor = "#00474b"; // Reset to default background color
        clickedButton.style.color = "white"; // Reset to default text color
        tipPercent = 0; // Reset tipPercent
        lastClickedButton = null; // Clear the last clicked button reference
        AmountsUpdate(); // Update displayed amounts
        console.log("Tip percent reset to default (0%)");
        return;
    }

    clickedButton.style.backgroundColor = "blue"; // Set the new color
    clickedButton.style.color = "white"; // Ensure text is visible on new background
    
      // Reset the background color of the last clicked button, if any
  if (lastClickedButton && lastClickedButton !== clickedButton) {
    lastClickedButton.style.backgroundColor = "#00474b"; // Default color (can be set in CSS)
    lastClickedButton.style.color = "white"; // Reset text color
  }

  // Update the last clicked button
  lastClickedButton = clickedButton;
  
  //Update the tip percent
    tipPercent = parseFloat(event.target.getAttribute("data-value")) / 100;
    AmountsUpdate();
    console.log("tipPercent = " + tipPercent);
}
tipButtons.forEach((button) => {
    button.addEventListener("click", onPercentClick);
  });

onCustomPercent =(event) =>{
    const inputValue = event.target.value;
    tipPercent = parseFloat(inputValue) / 100 || 0;
    AmountsUpdate();
    console.log("tipPercent = " + tipPercent);
}
document.getElementById("custom-tip").addEventListener("input", onCustomPercent);
document.getElementById("custom-tip").addEventListener("click", onCustomPercent);


 //Update Amounts
const AmountsUpdate = () => {
    tipPerPerson=(bill*tipPercent)/pplAmount;
    totalPerPerson = bill/pplAmount + tipPerPerson;
    
    document.getElementById("tipAmount").textContent= `${(tipPerPerson).toFixed(2)}`+"$";
    document.getElementById("totalAmount").textContent= `${(totalPerPerson).toFixed(2)}` + "$";
}


// Reset Button
const resetButton =(event) => {
    bill=0;
    document.getElementById("bill").value=0;

    totalPerPerson=1;
    document.getElementById("people").value=1;

    tipPerPerson=0;
    tipPercent=0.05;

    AmountsUpdate();
    
};
document.getElementById("resetBtn").addEventListener("click", resetButton);


console.log(tipButtons); // Logs NodeList containing all buttons