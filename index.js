window.onload = () => {
    setInitialState();
};

const setInitialState = () => {
    disableTipButtons();
    document.getElementById("people-count").disabled = true; 
};

const disableTipButtons = () => {
    document.querySelectorAll(".tip-button").forEach((button) => {
        button.disabled = true; 
    });
    document.getElementById("specificTip").disabled = true; 
}
const enableTipButtons = () => {
    document.querySelectorAll(".tip-button").forEach((button) => {
        button.disabled = false; 
    });
    document.getElementById("specificTip").disabled = false; 
};

const priceInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-count");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.getElementById("specificTip");
const resetButton = document.getElementById("reset-button");
const tipAmountB = document.getElementById("tip-amountB");
const PayPerPerson = document.getElementById("PayPerPerson");

let price = 0;
let people = 0;
let tip = 0;
let PriceWithTip = 0;
let TotalTip = 0;
let isTipSelected = false;
let Num=0;
priceInput.addEventListener("change", (e) => {
    if((e.target.value &&Number.isInteger(Number(e.target.value)))|| e.target.value==""){
        e.target.value="" ? price=0 : price=Number(e.target.value);
    }
    else{
        price=0;
        alert("Please enter a valid number");
    }
    if(price!=0){
        enableTipButtons();
    }
    else{
        disableTipButtons();
    }
    if(isTipSelected && people>0){
        PriceWithTip=(price*Num).toFixed(2);
        TotalTip=PriceWithTip-price;
        document.getElementById("tip-amountB").innerText="$" + (TotalTip/people).toFixed(2);
        if(tipAmountB.innerText.length>7){
            tipAmountB.style.fontSize="2vw";
        }
        document.getElementById("PayPerPerson").innerText="$" + (PriceWithTip/people).toFixed(2);
        if(PayPerPerson.innerText.length>7){
            PayPerPerson.style.fontSize="2vw";
        }
    }
    
});

const getTip=(number)=>{
    Num=number;
    tipButtons.forEach((button) => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
    });
    if(number==1.05 ){
        if(!customTipInput.value==""){
            document.getElementById("5").style.backgroundColor = "hsl(172, 67%, 45%)";
            customTipInput.value="";
        }
        document.getElementById("5").style.backgroundColor = "hsl(172, 67%, 45%)";
        
    }
    else if(number==1.1 ){
        if(!customTipInput.value==""){
            document.getElementById("10").style.backgroundColor = "hsl(172, 67%, 45%)";
            customTipInput.value="";
        }
        document.getElementById("10").style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    else if(number==1.15 ){
        if(!customTipInput.value==""){
            document.getElementById("15").style.backgroundColor = "hsl(172, 67%, 45%)";
            customTipInput.value="";
        }
        document.getElementById("15").style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    else if(number==1.25 ){
        if(!customTipInput.value==""){
            document.getElementById("25").style.backgroundColor = "hsl(172, 67%, 45%)";
            customTipInput.value="";
        }
        document.getElementById("25").style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    else if(number==1.5 ){
        if(!customTipInput.value==""){
            document.getElementById("50").style.backgroundColor = "hsl(172, 67%, 45%)";
            customTipInput.value="";
        }
        document.getElementById("50").style.backgroundColor = "hsl(172, 67%, 45%)";
    };
    PriceWithTip=(price*number).toFixed(2);
    TotalTip=PriceWithTip-price;
    peopleInput.disabled = false;
    console.log("People input enabled");
    if(price && people){
        document.getElementById("tip-amountB").innerText="$" + (TotalTip/people).toFixed(2);
        if(tipAmountB.innerText.length>7){
            tipAmountB.style.fontSize="2vw";
        }
        document.getElementById("PayPerPerson").innerText="$" + (PriceWithTip/people).toFixed(2);
        if(PayPerPerson.innerText.length>7){
            PayPerPerson.style.fontSize="2vw";
        }
    }
    isTipSelected = true;

}

customTipInput.addEventListener("change", (e) => {
    tipButtons.forEach((button) => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
    })
    if(!Number.isInteger(Number(e.target.value))&& e.target.value!=""){
        alert("Please enter a valid number");
        document.getElementById("tip-amountB").innerText="$0.00";
        document.getElementById("PayPerPerson").innerText="$0.00";
    }
    else if(Number(e.target.value)>0 && Number(e.target.value)<100){
        getTip(1+(Number(e.target.value)/100));
    }
});

peopleInput.addEventListener("input", (e) => {
    if(Number.isInteger(Number(e.target.value))|| e.target.value==""){
        e.target.value="" ? people=0 : people=Number(e.target.value);
    }
    else{
        people=0;
        alert("Please enter a valid number");
    }
    if(people!=0){
        tipAmountB.innerText="$" + (TotalTip/people).toFixed(2);
        if(tipAmountB.innerText.length>7){
            tipAmountB.style.fontSize="2vw";
        }
        PayPerPerson.innerText="$" + (PriceWithTip/people).toFixed(2);
        if(PayPerPerson.innerText.length>7){
            PayPerPerson.style.fontSize="2vw";
        }

    }
    else{
        document.getElementById("tip-amountB").innerText="$0.00";
        document.getElementById("PayPerPerson").innerText="$0.00";
    }
});



const resetFunc=()=>{
    priceInput.value="";
    peopleInput.value="";
    tipButtons.forEach((button) => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
    });
    customTipInput.value="";
    tipAmountB.style.fontSize="2.5vw";
    PayPerPerson.style.fontSize="2.5vw";
    document.getElementById("tip-amountB").innerText="$0.00";
    document.getElementById("PayPerPerson").innerText="$0.00";
    price=0;
    people=0;
    tip=0;
    PriceWithTip=0;
    TotalTip=0;
    isTipSelected = false;
    disableTipButtons();
    peopleInput.disabled = true;
}
