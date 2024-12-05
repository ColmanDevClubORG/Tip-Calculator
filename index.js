let amountPeople;
let TotalPrice;
let TotalTip;
const button5 = document.getElementById("5");
const button10 = document.getElementById("10");
const button15= document.getElementById("15");
const button25 = document.getElementById("25");
const button50 = document.getElementById("50");
let currentTip;
let price;

document.getElementById("bill-input").addEventListener("input", function(e){
    price=e.target.value;

})


const getTip=(number)=>{
    // button5.style.backgroundColor = "hsl(172, 67%, 45%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    TotalPrice=(number*price).toFixed(2);
    TotalTip=TotalPrice-price;
    console.log(TotalPrice);
    if(price && amountPeople){
        document.getElementById("tip-amountB").innerText="$" + (TotalTip/amountPeople).toFixed(2);
        document.getElementById("PayPerPerson").innerText="$" + (TotalPrice/amountPeople).toFixed(2);
    }
   
    
    
    }
    
document.getElementById("people-count").addEventListener("input", function(e){
    let button1 = document.getElementById("tip-amountB");
    let button2 = document.getElementById("PayPerPerson");
    amountPeople = e.target.value;
    console.log(TotalPrice/amountPeople);
    button1.innerText = "$" + (TotalTip/amountPeople).toFixed(2);
    button2.innerText = "$" + (TotalPrice/amountPeople).toFixed(2);

    
})

button5.addEventListener("click", function(){
    button5.style.backgroundColor = "hsl(172, 67%, 45%)";
})
button10.addEventListener("click", function(){
    button10.style.backgroundColor = "hsl(172, 67%, 45%)";
})
button15.addEventListener("click", function(){
    button15.style.backgroundColor = "hsl(172, 67%, 45%)";
})
button25.addEventListener("click", function(){
    button25.style.backgroundColor = "hsl(172, 67%, 45%)";
})
button50.addEventListener("click", function(){
    button50.style.backgroundColor = "hsl(172, 67%, 45%)";
})

const specificTip = (number) =>{
    if(number<0||number>100){
    alert("Please enter a number between 0 and 100");
    }
    getTip(1+(number/100))  
};

const resetFunc=()=>{
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("bill-input").value="";
    document.getElementById("people-count").value="";
    document.getElementById("tip-amountB").innerText="$0.00";
    document.getElementById("PayPerPerson").innerText="$0.00";
    document.getElementById("specificTip").value="";

    price=0;
    amountPeople=0;
    TotalPrice=0;
    TotalTip=0;
}


