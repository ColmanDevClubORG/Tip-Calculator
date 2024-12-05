let totalAmount;


const calculateTip = (x) => {
    const amount = document.getElementById('amountOfBill').value;
    if (amount === '') {
      alert('Please enter the amount of bill');
      return;
    }
    else{
         totalAmount = amount*x;
        }
    document.getElementById('tip-amount').innerHTML = (totalAmount - amount).toFixed(2) + "$";
  };
  
  const updatePeople = () => {
    const numberOfPeople = document.getElementById('numOfPeople').value;
    const amount = document.getElementById('amountOfBill').value;
    if (numberOfPeople == 0 || amount === '') {
      alert('Please enter the number of people');
      return;
    }
    perPersonAmount = (totalAmount/numberOfPeople).toFixed(2);
    document.getElementById('total-amount').innerHTML = perPersonAmount + "$";
  };

    const reset = () => {
        document.getElementById('amountOfBill').value = '';
        document.getElementById('numOfPeople').value = '';
        document.getElementById('tip-amount').innerHTML = '0.00$';
        document.getElementById('total-amount').innerHTML = '0.00$';
    }