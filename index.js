let tip = document.getElementById('tipamount');
let total = document.getElementById('totalamount');
let custom = document.getElementById('custom');
const bill = document.getElementById('bill');
const numOfPeople = document.getElementById('numOfPeople');
const input = document.createElement("input");


function calcTip(e) {
    const billamount = parseFloat(bill.value);
    const peopleamount = parseFloat(numOfPeople.value);
    if (bill.value == "" || numOfPeople.value == "") {
        alert("please fill all fields correctlly")
    }

    switch (e) {
        case (5):
            tip.textContent = ((billamount / 100 * 5) / peopleamount).toFixed(2);
            total.textContent = ((billamount + (billamount / 100 * 5)) / peopleamount).toFixed(2);
            break;

        case (10):
            tip.textContent = ((billamount / 100 * 10) / peopleamount).toFixed(2);
            total.textContent = ((billamount + (billamount / 100 * 10)) / peopleamount).toFixed(2);
            break;

        case (15):
            tip.textContent = ((billamount / 100 * 15) / peopleamount).toFixed(2);
            total.textContent = ((billamount + (billamount / 100 * 15)) / peopleamount).toFixed(2);
            break;

        case (25):
            tip.textContent = ((billamount / 100 * 25) / peopleamount).toFixed(2);
            total.textContent = ((billamount + (billamount / 100 * 25)) / peopleamount).toFixed(2);
            break;

        case (50):
            tip.textContent = ((billamount / 100 * 50) / peopleamount).toFixed(2);
            total.textContent = ((billamount + (billamount / 100 * 50)) / peopleamount).toFixed(2);
            break;
    }
}

function customNumber() {
    input.className = "inputButtonvalue"
    input.type = "text";
    custom.parentNode.replaceChild(input, custom);
}

input.addEventListener("input", () => {
    const billamount = parseFloat(bill.value);
    const peopleamount = parseFloat(numOfPeople.value);
    const value = parseFloat(input.value);

    if (billamount !== "" && peopleamount !== "") {
        tip.textContent = ((billamount / 100 * value) / peopleamount).toFixed(2);
        total.textContent = ((billamount + (billamount / 100 * value)) / peopleamount).toFixed(2);
    } else {
        tip.textContent = "";
        total.textContent = "";
    }
});

function reset() {
    bill.value = ""
    numOfPeople.value = ""
    tip.textContent = ""
    total.textContent = ""
    input.parentNode.replaceChild(custom, input);
}





