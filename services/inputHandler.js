let inputs = {};
let backgroundColorBtn = {};

const billHandler = (e) => {
    inputs.bill = parseInt(e.target.value);
}


const pressPercentTipBtn = () => {
    const tipBtn = document.querySelectorAll('.tip-btn');
    const customTipInput = document.getElementById('tip-input');

    tipBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const tipValue = event.target.value;
            customTipInput.value = tipValue;
            tipCustomHandler(tipValue);
            backgroundColorBtn.tipPercentBtn = btn;
        })
    });
}
pressPercentTipBtn();


const tipCustomHandler = (tipValue) => {
    inputs.tip = parseInt(tipValue);
    const tipBtn = document.querySelectorAll('.tip-btn');
    const tipArray = Array.from(tipBtn);

    const tipPercentBtn = tipArray.find((btn) => btn.value === tipValue);

    if (backgroundColorBtn.tipPercentBtn) {
        backgroundColorBtn.tipPercentBtn.style.backgroundColor = '';
    }
    if (tipPercentBtn) {
        tipPercentBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        backgroundColorBtn.tipPercentBtn = tipPercentBtn;
    }
    else {
        backgroundColorBtn = {};
    }
};

const peopleHandler = (e) => {
    inputs.people = parseInt(e.target.value);
    setTimeout(() => {
        inputValidation(inputs)
    }, 200);
}


const resetForm = () => {
    const customTipInput = document.getElementById('tip-input');
    const inputBill = document.getElementById('bill-input');
    const inputPeople = document.getElementById('people-input');
    const tipAmount = document.getElementById('tip-amount');
    const peopleAmount = document.getElementById('people-amount');

    resetBtnTipPercent();
    resetErrorMessages();

    inputBill.value = '';
    customTipInput.value = '';
    inputPeople.value = '';
    tipAmount.innerHTML = `$0.00`;
    peopleAmount.innerHTML = `$0.00`;
}


const resetErrorMessages = () => {
    const errorMessageBill = document.querySelector('.catch-and-bill-title > .errorMessage');
    const errorInputBill = document.getElementById('bill-input');

    const errorMessageTip = document.querySelector('.catch-and-tip-title > .errorMessage');
    const errorInputTip = document.getElementById('tip-input');

    const errorMessagePeople = document.querySelector('.catch-and-people-title > .errorMessage');
    const errorInputPeople = document.getElementById('people-input');

    errorMessageBill.innerHTML = "";
    errorMessageBill.style.display = "none";
    errorInputBill.style = "border: 2px solid hsl(189, 41%, 97%);animation: none;";
    void errorInputBill.offsetWidth;

    errorMessageTip.innerHTML = "";
    errorMessageTip.style.display = "none";
    errorInputTip.style = "border: 2px solid hsl(189, 41%, 97%);animation: none;";
    void errorInputTip.offsetWidth;

    errorMessagePeople.innerHTML = "";
    errorMessagePeople.style.display = "none";
    errorInputPeople.style = "border: 2px solid hsl(189, 41%, 97%);animation: none;";
    void errorInputPeople.offsetWidth;

}

const resetBtnTipPercent = () =>{
    if (backgroundColorBtn.tipPercentBtn) {
        backgroundColorBtn.tipPercentBtn.style.backgroundColor = '';
    }
}

