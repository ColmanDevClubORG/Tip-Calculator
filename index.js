let numOfPeople;
let bill;
let tip;

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
    document.getElementById("price").innerHTML =amountPerPerson ;

}
const changeTipPerPerson = (button) => {
    const tipPercent = parseInt(button.getAttribute('data-tip'));
    const totalAmount = bill ;
    const amountPerPerson = totalAmount / numOfPeople;
    const totalTip= amountPerPerson * tipPercent*0.01;
    document.getElementById("tipPerson").innerHTML =totalTip ;

} 

const changeTip = (element) => {
    tipPercent = element.value;
    changeTipPerPerson()
}
