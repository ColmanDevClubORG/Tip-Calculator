export const validateInput = (input, messageElement, errorMessage, minValue) => {
    const value = parseFloat(input.value);
    if (value <= minValue) {
        messageElement.textContent = errorMessage;
        input.classList.add('error');
        return false;
    }
    messageElement.textContent = '';
    input.classList.remove('error');
    return true;
};