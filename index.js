let bill = 0;
let numberPeople = 0;
let tip = 0;

// ההזנה ללחצן טיפ
const calcTip = (t) => {
    tip = t;
}
// מה שהמשתמש הכניס ידנית (כמות ומספר חשבון)
const allUpdate = () => {
    bill = document.getElementById("bill").value;
    numberPeople = document.getElementById("people").value;
}


const test = () => {
    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount");
        return;
    }
    //הכנסת מספר שלילי של אנשים
    if (isNaN(numberPeople) || numberPeople <= 0) {
        alert("Please enter a valid number of people");
        return;
    }
    const tipAmount = ((bill * tip) / 100) / numberPeople; // לכל בנאדם- חישוב התשלום עם האחוז-TIP AMOUNT
    const totalofperson = (bill / numberPeople) + tipAmount;

    document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(2)}`;//התוצאה עם שתי ספרות אחרי הנקודה
    document.getElementById("total").innerHTML = `$${totalofperson.toFixed(2)}`;
}

//הקשבה לבחירת המשתמש
document.getElementById("bill").addEventListener("input", allUpdate);
document.getElementById("people").addEventListener("input", allUpdate);
document.getElementById("submit-btn").addEventListener("click", test);

