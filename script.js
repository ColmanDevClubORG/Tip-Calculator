let bill;
let numOfpeople;
let tipPercentage;



const onBillChange = (e) => {
   bill = parseInt(e.target.value); 
   console.log("bill",bill);
   updateDashboard();
}

const onpeopleChange = (e) => {
    numOfpeople = parseInt(e.target.value); 
    console.log("people",numOfpeople);
    updateDashboard(); 
 }

 const ontipPercentageChange = (e) => {
    tipPercentage = parseInt(e.target.value); 
    console.log("tip-percentage-input",tipPercentage);
    updateDashboard();
 }

 const updateDashboard = () => {
    const tip = bill*(tipPercentage/100);
    const total = bill + tip;

    const tipPerPerson = tip/numOfpeople;
    const totalPerPerson = total/numOfpeople;

    document.getElementById("tip-person").textContent =`$${tipPerPerson}`;
    document.getElementById("total-person").textContent =`$${totalPerPerson}`;
 }