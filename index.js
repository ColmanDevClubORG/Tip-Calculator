let numOfPeople = 1;
let bill;
let totalTip = 0;
let tipPercent = 0;


const onChangeNumOfPeople = () => {
    const peopleElement = document.getElementById('people');
    numOfPeople = peopleElement.value
}
const onChangeBill =()=>{
    const billElement=document.getElementById('bill')
    bill=billElement.value
}
const onChangeTip =()=>{
    const priveElement=document.getElementById('price')
    price=priveElement.value
}

const ChangeTotalAmount =()=>{
    const amountPerPerson = bill / numOfPeople;
    totalTip= amountPerPerson * tipPercent*0.01;
    document.getElementById("tipPerson").innerHTML =totalTip ;
    document.getElementById("price").innerHTML =amountPerPerson ;
    document.getElementById("total").innerHTML =amountPerPerson + totalTip ;
}

const changeTipPerPerson = (element) => {
    tipPercent = element.value;
    ChangeTotalAmount()

};