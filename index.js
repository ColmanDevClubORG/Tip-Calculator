const total=document.getElementById("total");
const tipAmount=document.getElementById("tip");

let bill=0
let tip=0;
let numOfPeople;
let tipPrecent;


const selectedTip =(e)=>{
    tip=e/100;
   numOfPeople!=null? update() : sendError(true)
}
const selectedBill=(e)=>{
    console.log(e.target.value)
    bill= parseFloat(e.target.value);

    numOfPeople!=null? update() : sendError(true)
    
}
const selectedNumOfPpl=(e)=>{
    console.log(e.target.value)
    numOfPeople=e.target.value
    e.target.value===""||e.target.value===0? sendError(true):update(); 

    // numOfPeople!=null|| numOfPeople!=0? update() : sendError(true)

}
const customTip= (e)=>{
    console.log(e.target.value)
    tip=parseFloat(e.target.value/100)
    update(); 
}


const totalBill=()=>{
    if(numOfPeople!=null ){
        total.innerHTML='$'+((tip * bill + bill) / numOfPeople).toFixed(2) 
    }
    else{
        sendError()
    }
}

const totalTip=()=>{
    
    if(numOfPeople!=null){
        tipAmount.innerHTML= '$'+ (tip*bill/numOfPeople).toFixed(2); 
    }
    else{
        sendError()
    }
}

const update=()=>{
    totalBill()
    totalTip()
    sendError(false)
}

const sendError=(flag)=>{
    let error=document.getElementById("error");
    flag? error.style.visibility='visible':error.style.visibility='hidden'
   
}

const reset=()=>{
    bill = 0;
    tip = 0;
    numOfPeople = null;
    total.innerHTML = "$0.00";
    tipAmount.innerHTML = "$0.00";
    document.getElementById("bill").value = "";
    document.getElementById("ppl-counter").value = "";
    sendError(false);
   
}

