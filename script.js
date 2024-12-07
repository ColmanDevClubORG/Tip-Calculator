const price=document.getElementById("price");
const numOfpeople=document.getElementById("numOfpeople");
const hoverWarning = document.getElementById("hover");
const tipAmountResult = document.getElementById("tipRes");
const totalAmountResult = document.getElementById("totalRes");
const custom=document.getElementById("custom");
const resetBtn=document.getElementById("resetBtn");



let tipAmout;
let total;

calcTip= (x) =>{
    const priceValue=parseFloat(price.value);
    const peopleValue=parseFloat(numOfpeople.value);

    if(!priceValue || !peopleValue || priceValue<=0 || peopleValue<=0){
        hoverWarning.style.display="block";
        return;
    }
    hoverWarning.style.display="none";

    tipAmount=(priceValue*x)/peopleValue;
    total=(priceValue*(1+x))/peopleValue;

    tipAmountResult.innerText="$"+tipAmount.toFixed(2);
    totalAmountResult.innerText="$"+total.toFixed(2);
}

customTip=()=> {
    const priceValue=parseFloat(price.value);
    const peopleValue=parseFloat(numOfpeople.value);
    const customValue= parseFloat(custom.value/100);

    if(!customValue || customValue<=0){
        hoverWarning.style.display="block";
        return;
    }
    hoverWarning.style.display="none";
    
    tipAmount=(priceValue*customValue)/peopleValue;
    total=(priceValue*(1+customValue))/peopleValue;
    

    tipAmountResult.innerText="$"+tipAmount.toFixed(2);
    totalAmountResult.innerText="$"+total.toFixed(2);
};

custom.addEventListener("blur", customTip);

reset=()=>{


    tipAmountResult.innerText="$0.00";
    totalAmountResult.innerText="$0.00";
    
    price.value = '';
    numOfpeople.value = '';
    custom.value = '';


    hoverWarning.style.display = "none";
    
};
resetBtn.addEventListener("click", reset);