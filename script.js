let billAmount = 0;
let howManyPpl = 1;
let tipPercentage = 0;
let tipForEach = 0;
let customTipPercentage = 0;

document.getElementById('reset-btn').addEventListener('click', resetValues);

document.getElementById('bill').addEventListener('input', (event) => {
    billAmount = Number(event.target.value) || 0;
    totalPerPerson();
    tipPerPerson();
});

document.getElementById('ppl-number').addEventListener('input', (event) => {
    howManyPpl = Number(event.target.value) || 1;
    totalPerPerson();
    tipPerPerson();
});

document.getElementById('custom-tip-input').addEventListener('input', (event) => {
    tipPercentage = 0;
    customTipPercentage = Number(event.target.value) || 0;
    updateTip(customTipPercentage);
    totalPerPerson();
    tipPerPerson();
});


function updateTip(newValue) {
    if(tipPercentage!==0){
        resetCustomTip();
    }
    tipPercentage = newValue / 100;
    totalPerPerson();
    tipPerPerson();
    console.log("Tip Percentage Updated:", tipPercentage);
}

function totalPerPerson() {

    const totalWithTip = billAmount * (1 + tipPercentage);
    const result = howManyPpl > 0 ? (totalWithTip / howManyPpl).toFixed(2) : 0;

    // הצגת התוצאה בתיבה
    document.getElementById('total-amount-input').value = `$${result}`;
    console.log("bill amount:", billAmount, "num of ppl:", howManyPpl, "tip:", tipPercentage, "result:", result); // הדפסת הערכים בקונסול
}

function tipPerPerson() {

    tipForEach = billAmount * (1 + tipPercentage) - billAmount;

    const tipRes = howManyPpl > 0 ? (tipForEach / howManyPpl).toFixed(2) : 0;


    document.getElementById('tip-amount-input').value = `$${tipRes}`;
    console.log( "result:", tipRes); // הדפסת הערכים בקונסול
}

function resetValues() {
    // איפוס המשתנים הגלובליים
    billAmount = 0;
    howManyPpl = 1;
    tipPercentage = 0;
    tipForEach = 0;
    customTipPercentage = 0;

    // איפוס תיבות הקלט
    document.getElementById('bill').value = '';
    document.getElementById('ppl-number').value = '';
    document.getElementById('total-amount-input').value = '';
    document.getElementById('tip-amount-input').value = '';
    document.getElementById('custom-tip-input').value = '';

    // חישוב מחדש
    totalPerPerson();
    console.log("All values reset to default.");
}

function resetCustomTip(){

    document.getElementById('custom-tip-input').value = 'Custom';
}