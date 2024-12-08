let totalAmount;


const calculateTip = (tipPercentage) => {
    const amount = document.getElementById('bill-input').value;
    if (amount === '') {
      alert('Please enter the amount of bill');
      return;
    }
    else{
         totalAmount = amount*tipPercentage;
        }
    document.getElementById('tip-amount').innerHTML = (totalAmount - amount).toFixed(2) + "$";
  };
  
  const updatePeople = () => {
    const numberOfPeople = document.getElementById('num-of-people-input').value;
    const amount = document.getElementById('bill-input').value;
    if (numberOfPeople == 0 || amount === '') {
      alert('Please enter the number of people');
      return;
    }
    perPersonAmount = (totalAmount/numberOfPeople).toFixed(2);
    document.getElementById('total-amount').innerHTML = perPersonAmount + "$";
  };

    const reset = () => {
        document.getElementById('bill-input').value = '';
        document.getElementById('num-of-people-input').value = '';
        document.getElementById('tip-amount').innerHTML = '0.00$';
        document.getElementById('total-amount').innerHTML = '0.00$';
    }