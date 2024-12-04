console.log('hello')
let selectedTip = 0; //global data

const changeTipAmount = () => {
const priceInput = document.getElementById('fPrice')
const price = priceInput.value
console.log('price choose: ' + price)
const tip = selectedTip
console.log('tip choose:' + tip)

const tipAmount = document.getElementById('amountNumber')
console.log(tipAmount)

const amountOfPeople = document.getElementById('fNum')
const amountP = amountOfPeople.value
console.log('amount :' + amountP)

const TotalPrice = document.getElementById('amountPrice')
console.log('total :' + TotalPrice.textContent)

if(amountP>0 && price && tip) //to make sure we choose on all the options and not divide by 0
{
    adjustFontSize("amountNumber");
    adjustFontSize("amountPrice");
    tipAmount.innerHTML = '$' + (price*tip/amountP).toFixed(2)
    console.log(price/amountP)
    TotalPrice.innerHTML = '$' + ((price*tip/amountP) + (price/amountP)).toFixed(2)
}
}

const Tip = (value) => {
    selectedTip = value
    changeTipAmount()
    console.log(value)
}

const chooseTipDifferent = () => {
    const selectYourTip = document.getElementById('chooseTipDifferent').value
    console.log('tip you choose' + selectYourTip)
    Tip(selectYourTip/100)
}
const resetAll = () =>{
    document.getElementById('amountNumber').innerHTML = '$' + 0
    document.getElementById('amountPrice').innerHTML = '$' + 0
}

const adjustFontSize = (elementId) => {
    const element = document.getElementById(elementId)
    const content = element.innerHTML
    element.style.fontSize = "1.2rem"
    // if (content.length > 2) { 
    //     element.style.fontSize = "1.2rem"; 
    // } else {
    //     element.style
    // }
}



