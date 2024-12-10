

let errors = {};
const inputValidation = (input) => {
    const inputs = { ...input };
    const errorMessageBill = document.querySelector('.catch-and-bill-title > .errorMessage');
    const errorInputBill = document.getElementById('bill-input');

    const errorMessageTip = document.querySelector('.catch-and-tip-title > .errorMessage');
    const errorInputTip = document.getElementById('tip-input');

    const errorMessagePeople = document.querySelector('.catch-and-people-title > .errorMessage');
    const errorInputPeople = document.getElementById('people-input');

    resetErrorMessages();

    if (inputs.bill < 0 || inputs.bill === "" || isNaN(inputs.bill)) {
        errors.bill = inputs.bill;
        errorMessageBill.style.display = "block";
        errorMessageBill.innerHTML = "&nbsp Bill amount must be a positive number. &nbsp";
        errorMessageBill.style.background = "rgb(255, 0, 0, 0.6)";
        errorMessageBill.style.fontFamily = "ariel, sans-serif";
        errorInputBill.style = "border: 2.5px solid rgb(255, 0, 0);animation: errorAnimation 0.04s ease-in-out;animation-iteration-count: 30;";
    }
    if (inputs.tip < 0 || inputs.tip === "" || isNaN(inputs.tip)) {
        errors.tip = inputs.tip;
        errorMessageTip.style.display = "block";
        errorMessageTip.innerHTML = "&nbsp Tip percentage must be a positive number. &nbsp";
        errorMessageTip.style.background = "rgb(255, 0, 0, 0.6)";
        errorMessageTip.style.fontFamily = "ariel, sans-serif";
        errorInputTip.style = "border: 2.5px solid rgb(255, 0, 0);animation: errorAnimation 0.04s ease-in-out;animation-iteration-count: 30;";
    }
    if (inputs.people < 1 || inputs.people === "" || isNaN(inputs.people)) {
        errors.people = inputs.people;
        errorMessagePeople.style.display = "block";
        errorMessagePeople.innerHTML = "&nbsp People amount must be greater than 0. &nbsp;";
        errorMessagePeople.style.background = "rgb(255, 0, 0, 0.6)";
        errorMessagePeople.style.fontFamily = "ariel, sans-serif";
        errorInputPeople.style = "border: 2.5px solid rgb(255, 0, 0);animation: errorAnimation 0.04s ease-in-out;animation-iteration-count: 30;";
    }

    if (Object.keys(errors).length === 0) {
        calculateTotal(inputs);
    } else {
        errors = {};
    }
};