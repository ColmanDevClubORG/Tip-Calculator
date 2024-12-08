console.log('hello')
let selectedTip = 0; //global data
const priceInput = document.getElementById('fPrice')
const amountOfPeople = document.getElementById('fNum')

const changeTipAmount = () => {
// const priceInput = document.getElementById('fPrice')

const price = priceInput.value
console.log('price choose: ' + price)
const tip = selectedTip
console.log('tip choose:' + tip)
// const amountOfPeople = document.getElementById('fNum')
const amountP = amountOfPeople.value
console.log('amount :' + amountP)

const tipAmount = document.getElementById('amountNumber')
console.log(tipAmount)

const TotalPrice = document.getElementById('amountPrice')
console.log('total :' + TotalPrice.textContent)

if(amountP>0 && price>=0 && tip>=0) //to make sure we choose on all the options and not divide by 0
{
    adjustFontSize("amountNumber");
    adjustFontSize("amountPrice");
    tipAmount.textContent = '$' + (price*tip/amountP).toFixed(2)
    console.log(price/amountP)
    TotalPrice.textContent = '$' + ((price*tip/amountP) + (price/amountP)).toFixed(2)
}
}

const Tip = (button, value) => {
    selectedTip = value
    console.log(button.innerHTML)

    document.querySelectorAll('.chooseTip').forEach(btn => {
        btn.style.backgroundColor = "hsl(183, 100%, 15%)"
    })
    button.style.backgroundColor = "hsl(172, 67%, 45%)"
    
    changeTipAmount()
    console.log(value)
}

const chooseTipDifferent = () => {
    const selectYourTip = document.getElementById('chooseTipDifferentInput').value

    if (selectYourTip <= 0) {
        alert('Please enter a valid percentage greater than 0')
        return
    }
    // if (isNaN(selectYourTip) || selectYourTip <= 0) {
    //     alert('Please enter a valid percentage greater than 0')
    //     return
    // }
    console.log('tip you choose' + selectYourTip/100)
    const inputTipChoosen = document.getElementById('chooseTipDifferentInput')
    Tip(inputTipChoosen, selectYourTip/100)
}

const resetAll = () =>{
    document.getElementById('amountNumber').innerHTML = '$' + 0
    document.getElementById('amountPrice').innerHTML = '$' + 0

    priceInput.value = 0
    amountOfPeople.value = 0
    document.getElementById('chooseTipDifferentInput').value = "Custom"
    document.querySelectorAll('.chooseTip').forEach(button => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)"
    })
}

const adjustFontSize = (elementId) => {
    const element = document.getElementById(elementId)
    const content = element.innerHTML
    element.style.fontSize = "1.2rem"
}



