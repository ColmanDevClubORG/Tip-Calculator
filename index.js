const total=document.getElementById("total");
const tipAmount=document.getElementById("tip");

let bill=0
let tip=0;
let numOfPeople;
let tipPrecent;


const selectedTip =(e)=>{
    tip=e/100;
    totalBill()
    totalTip()
}
const selectedBill=(e)=>{
    console.log(e.target.value)
    bill= parseFloat(e.target.value);
    totalBill()
    totalTip()
}
const selectedNumOfPpl=(e)=>{
    console.log(e.target.value)
    numOfPeople=e.target.value
    totalBill()
    totalTip()
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

//total.innerHTML=bill;
// const calculateTotal=()=>{
    
//    if


// }


// const custom = ()=>{
    
// }