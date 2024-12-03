    let inputBill;
    let inputPeople;
    let tip_amount;
    let result;
    let temporary;

const reset=()=>{ 
    tip_amount=document.getElementById('perPerson');
    result=document.getElementById('total');
    tip_amount.innerHTML='0.00$';
    result.innerHTML='0.00$';
}

const calculateTip=(event)=>{
    inputBill = document.getElementById('bill');
    inputPeople = document.getElementById('people');
    tip_amount=document.getElementById('perPerson');
    result=document.getElementById('total');
    
    temporary=((inputBill.value)*event).toFixed(2);
    tip_amount.innerHTML='$' + (temporary/inputPeople.value);
    result.innerHTML='$'+ temporary;
}

