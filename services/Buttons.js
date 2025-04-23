export const createTipButtons = (container, tipPercentages, handleTipButtonClick, customTipInput, handleCustomTipInput) => {
    tipPercentages.forEach((percentage) => {
        const button = document.createElement('button');
        button.classList.add('tip-button');
        button.textContent = `${percentage}%`;
        button.addEventListener('click', handleTipButtonClick);
        container.appendChild(button);
    });

    customTipInput = document.createElement('input');
    customTipInput.type = 'number';
    customTipInput.classList.add('custom-tip');
    customTipInput.id = 'custom-tip';
    customTipInput.placeholder = 'Custom';
    customTipInput.min = 0;
    customTipInput.addEventListener('input', handleCustomTipInput);
    container.appendChild(customTipInput);

    return customTipInput;
};

export const clearTipButtonSelection = (buttons) => {
    buttons.forEach((btn) => btn.classList.remove('selected'));
};

