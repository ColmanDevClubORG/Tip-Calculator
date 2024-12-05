        let billAmt = 0;
        let tipPrc = 0;
        let customTip = 0;
        
        document.getElementById('bill').addEventListener('input', function(event) {
        billAmt = event.target.value;
        });

        document.querySelectorAll('.tip-button').forEach(button => {
        button.addEventListener('click', function(event) {
        const buttons = document.querySelectorAll('.tip-button');
        buttons.forEach(btn => {
        btn.style.backgroundColor = ''; // Reset background color
        btn.style.borderColor = '';    // Reset border color
        });
        button.style.backgroundColor = 'hsl(172, 67%, 45%)';
        button.style.borderColor = 'hsl(183, 100%, 15%)';
        tipPrc = event.target.dataset.tip;
        })});



        const showTipAmount = (event) => {
        const numOfPeople = event.target.value; 
        if (tipPrc === 0) {
            tipPrc = (customTip / 100) + 1;
        }
        const totalBill = calculateBill(billAmt, tipPrc);
        const totalBillPerPerson = totalBill / numOfPeople;
        const totalTipPerPerson = (totalBill - billAmt) / numOfPeople;
        const currentBillAmount = document.getElementById('total');
        const currentTipAmount = document.getElementById('tip');
        currentBillAmount.innerHTML = totalBillPerPerson.toFixed(2);
        currentTipAmount.innerHTML = totalTipPerPerson.toFixed(2);
        }

        const customTipAmount = (event) => {
            customTip = event.target.value;
        }

        const calculateBill = (billAmt, tipPrc) => {
            const totalBill = billAmt * tipPrc;
            return totalBill;
        }

        const resetCalc = () => {
            location.reload();
        }

