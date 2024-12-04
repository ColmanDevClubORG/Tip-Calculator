console.log("hello")
const priceInput = document.getElementById("bill-input");
const peopleInput= document.getElementById("people-input");
let selectedTip;
let price;
let people;

const getPrice=()=>
{  
    price= priceInput.value;
    console.log(price);
    checkAndCalculate();
}

const getPeople= () =>
{
    people= peopleInput.value;
    console.log(people);
    checkAndCalculate();
}

const tip = (value) => {
    selectedTip = value;
    console.log(selectedTip)
    checkAndCalculate();
}

const totalTipAmount=()=>
{
    let tipAmount= document.getElementById("tipPerPerson");
    tipAmount.textContent= "$"+ ((selectedTip*price)/100)/people;
    console.log(tipAmount);
}

const totalAmount = () => {
    let totalPrice = document.getElementById("totalAmount");
    let totalTip = (selectedTip * price) / 100;
    let totalPerPerson = (parseFloat(price) + totalTip) / people;

    totalPrice.textContent = "$" + totalPerPerson.toFixed(2);
    console.log("Total Amount Per Person:", totalPerPerson);
};

const checkAndCalculate = () => {
    if (selectedTip && price && people) {
        totalTipAmount();
        totalAmount();
    } else {
        console.log("Missing input: check selectedTip, price, or people");
    }
}

const custom= document.getElementById("custom");
custom.addEventListener("change", ()=>{
    selectedTip= custom.value;
})

const resetBtn= document.getElementById("reset");
resetBtn.addEventListener("click", ()=>{
    selectedTip=0;
    people=0;
    price=0;

    document.getElementById("bill-input").value= "";
    document.getElementById("people-input").value="";
    document.getElementById("custom").value="";

    document.getElementById("tipPerPerson").textContent= "$0";
    document.getElementById("totalAmount").textContent= "$0";
    
});

priceInput.addEventListener("change", getPrice);
peopleInput.addEventListener("change", getPeople);
