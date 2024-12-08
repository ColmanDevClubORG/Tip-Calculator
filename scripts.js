// Scripts for the Tip Calculator


// Event listener for loading DOM and getting the IDs of button and input fields
document.addEventListener('DOMContentLoaded', function() {
    const  billInput = document.getElementById('bill');
    const numOfPeopleInput = document.getElementById('numOfPeople');
    const tipButtons = document.querySelectorAll('.button-container button');
    const customTipInput = document.createElement('input');
    const tipAmountDisplay = document.querySelector('.amount-container h1');
    const totalAmountDisplay = document.querySelectorAll('.amount-container h1')[1];
 
    let billAmount = 0;
    let numOfPeople = 1;
    let tipPercentage = 0;
 
 
   // Event listener for bill input field
 
   billInput.addEventListener('input', () => {
     billAmount = parseFloat(billInput.value) || 0;
     calculateAndDisplay();
   });
 
 
   // Event listener for the number of people input field
   numOfPeopleInput.addEventListener('input', () => {
     numOfPeople = parseInt(numOfPeopleInput.value) || 1;
     calculateAndDisplay();
   });
 
 
   // Event listener for each of the Tip buttons
   // If the custom tip button is being pressed it will display the custom tip input field
   tipButtons.forEach(button => {
     button.addEventListener('click', () => {
       if (button.textContent === 'Custom') {
         const customTipInput = document.createElement('input');
         customTipInput.type = 'number';
         customTipInput.placeholder = 'Custom';
         customTipInput.min = 0;
         customTipInput.max = 100;
         customTipInput.style.width = '100%';
         customTipInput.style.marginTop = '10px';
         customTipInput.style.padding = '10px';
         customTipInput.style.borderRadius = '5px';
         customTipInput.style.border = '1px solid hsl(184, 14%, 56%)';
         customTipInput.style.textAlign = 'center';
         customTipInput.style.fontSize = '16px';
         customTipInput.style.color = 'hsl(184, 14%, 56%)';
         customTipInput.style.backgroundColor = 'hsl(189, 41%, 97%)';
 
         button.replaceWith(customTipInput);
 
         customTipInput.addEventListener('input', () => {
           tipPercentage = parseFloat(customTipInput.value) / 100 || 0;
           calculateAndDisplay();
         });
       } else {
         tipPercentage = parseFloat(button.textContent) / 100;
         calculateAndDisplay();
       }
     });
   });
   
 // caulcateAndDisplay , used the constantly validate the form and update the display
 function calculateAndDisplay() {
     if (numOfPeople > 0) {
       const tipAmount = (billAmount * tipPercentage) / numOfPeople;
       const totalAmount = (billAmount + billAmount * tipPercentage) / numOfPeople;
       tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
       totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
     }
   }
 
 
 });
 
  