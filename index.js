let tipAmount = document.getElementById('tipAmount');

let bill = document.getElementById('billInput');
let numOfPpl = document.getElementById('numPplInput');
let customInp = document.getElementById('selectCustomTip');

let tipPercent = 0;
let LastCLickedTipBtn = null;


const updateDataWithNewBill = () =>{
    changeTotal();
}

const updateDataWithNewNumPpl = () =>{
    changeTotal();
}

const changeClickedBtnColor = (obj, changeBack) =>{
    if(selectCustomTip != obj){
        if(changeBack)
        {
            obj.style.backgroundColor = "hsl(183, 100%, 15%)";
            obj.style.color = "white";
        }

        else {
            obj.style.backgroundColor = "hsl(172, 61%, 73%)";
            obj.style.color = "hsl(183, 100%, 15%)";
        }
    }
}

const changeBtnColors = (obj) =>{

    // if we want to reset the colors, we will sent a true flag as an object from the function "reset()""
        if(obj === true)
        {
            changeClickedBtnColor(LastCLickedTipBtn, true);
            tipPercent = 0;
            return;
        }

        if(LastCLickedTipBtn != obj && obj != selectCustomTip){

        if(LastCLickedTipBtn != null){
            changeClickedBtnColor(obj, false);
            changeClickedBtnColor(LastCLickedTipBtn, true)
            LastCLickedTipBtn = obj;
        }

        else{
            LastCLickedTipBtn = obj;
            changeClickedBtnColor(obj, false);
        }
    }
}

const calcTipValPerPerson = () =>
{
    let numBill = Number(bill.value);
    let numPpl = Number(numOfPpl.value);
    let val = 0;


    if(isNaN(numBill) || isNaN(numPpl))
        return;

    if(numPpl == 0)
        numPpl = 1;
    

    return val = (tipPercent * (numBill/100)) / numPpl;
}

const changeTipAmount = () => {

    let tipPerPerson = calcTipValPerPerson(tipPercent);
    tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
    return tipPerPerson;
}

const calcTotalPerPerson = (tipPerPerson) => {
    let numBill = Number(bill.value);
    let numPpl = Number(numOfPpl.value);

    if(numPpl == 0)
        numPpl = 1;

    return (numBill / numPpl) + tipPerPerson;
}

const changeTotal = () => {
    let tipPerPerson = changeTipAmount();
    total.innerHTML = "$" + calcTotalPerPerson(tipPerPerson).toFixed(2);
}

const getBtnVal = (obj) => {

    changeBtnColors(obj);

    tipPercent = Number(obj.value);

    changeTotal();

    return Number(obj.value);
}

const reset = () => {
    bill.value = "";
    numOfPpl.value = "";
    selectCustomTip.value = "";

    changeBtnColors(true);

    changeTotal();
}
