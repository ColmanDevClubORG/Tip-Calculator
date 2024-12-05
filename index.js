// let amountPeople;
// let TotalPrice;
// let TotalTip;
// const button5 = document.getElementById("5");
// const button10 = document.getElementById("10");
// const button15= document.getElementById("15");
// const button25 = document.getElementById("25");
// const button50 = document.getElementById("50");
// let currentTip;
// let price;

// document.getElementById("bill-input").addEventListener("input", function(e){
//     price=e.target.value;

// })


// const getTip=(number)=>{
//     // button5.style.backgroundColor = "hsl(172, 67%, 45%)";
//     button5.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button10.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button15.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button25.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button50.style.backgroundColor = "hsl(183, 100%, 15%)";
//     TotalPrice=(number*price).toFixed(2);
//     TotalTip=TotalPrice-price;
//     console.log(TotalPrice);
//     if(price && amountPeople){
//         document.getElementById("tip-amountB").innerText="$" + (TotalTip/amountPeople).toFixed(2);
//         document.getElementById("PayPerPerson").innerText="$" + (TotalPrice/amountPeople).toFixed(2);
//     }
   
    
    
//     }
    
// document.getElementById("people-count").addEventListener("input", function(e){
//     let button1 = document.getElementById("tip-amountB");
//     let button2 = document.getElementById("PayPerPerson");
//     amountPeople = e.target.value;
//     console.log(TotalPrice/amountPeople);
//     button1.innerText = "$" + (TotalTip/amountPeople).toFixed(2);
//     button2.innerText = "$" + (TotalPrice/amountPeople).toFixed(2);

    
// })

// button5.addEventListener("click", function(){
//     button5.style.backgroundColor = "hsl(172, 67%, 45%)";
//     document.getElementById("specificTip").value="";
// })
// button10.addEventListener("click", function(){
//     button10.style.backgroundColor = "hsl(172, 67%, 45%)";
//     document.getElementById("specificTip").value="";
// })
// button15.addEventListener("click", function(){
//     button15.style.backgroundColor = "hsl(172, 67%, 45%)";
//     document.getElementById("specificTip").value="";
// })
// button25.addEventListener("click", function(){
//     button25.style.backgroundColor = "hsl(172, 67%, 45%)";
//     document.getElementById("specificTip").value="";
// })
// button50.addEventListener("click", function(){
//     button50.style.backgroundColor = "hsl(172, 67%, 45%)";
//     document.getElementById("specificTip").value="";
// })

// const specificTip = (number) =>{
//     if(number<0||number>100){
//     alert("Please enter a number between 0 and 100");
//     }
//     getTip(1+(number/100))  
// };

// const resetFunc=()=>{
//     button5.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button10.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button15.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button25.style.backgroundColor = "hsl(183, 100%, 15%)";
//     button50.style.backgroundColor = "hsl(183, 100%, 15%)";
//     document.getElementById("bill-input").value="";
//     document.getElementById("people-count").value="";
//     document.getElementById("tip-amountB").innerText="$0.00";
//     document.getElementById("PayPerPerson").innerText="$0.00";
//     document.getElementById("specificTip").value="";

//     price=0;
//     amountPeople=0;
//     TotalPrice=0;
//     TotalTip=0;
// }
window.onload = () => {
    setInitialState();
};

const setInitialState = () => {
    disableTipButtons();
    document.getElementById("people-count").disabled = true; // Disable people input
};

const disableTipButtons = () => {
    document.querySelectorAll(".tip-button").forEach((button) => {
        button.disabled = true; // Disable all tip buttons
    });
    document.getElementById("specificTip").disabled = true; // Disable custom tip input
}
const enableTipButtons = () => {
    document.querySelectorAll(".tip-button").forEach((button) => {
        button.disabled = false; // Enable all tip buttons
    });
    document.getElementById("specificTip").disabled = false; // Enable custom tip input
};

const priceInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-count");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.getElementById("specificTip");
const resetButton = document.getElementById("reset-button");

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
        document.getElementById("PayPerPerson").innerText="$" + (PriceWithTip/people).toFixed(2);
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
        document.getElementById("PayPerPerson").innerText="$" + (PriceWithTip/people).toFixed(2);
    }
    isTipSelected = true;

}

peopleInput.addEventListener("input", (e) => {
    if(Number.isInteger(Number(e.target.value))|| e.target.value==""){
        e.target.value="" ? people=0 : people=Number(e.target.value);
    }
    else{
        people=0;
        alert("Please enter a valid number");
    }
    if(people!=0){
        document.getElementById("tip-amountB").innerText="$" + (TotalTip/people).toFixed(2);
        document.getElementById("PayPerPerson").innerText="$" + (PriceWithTip/people).toFixed(2);

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


