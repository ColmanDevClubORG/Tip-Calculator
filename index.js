let NumberOfPepole = 0;
let Bill = 0;
let tip = 0;

/** הכנסת הטיפ */
const calcTip = (t) => {
  tip = t;
  updatedResults();
};

/** עדכון הערכים של התשלום ומספר האנשים */
const updatedResults = () => {
  NumberOfPepole = document.getElementById("people").value; // המרת הערך למספר
  Bill = document.getElementById("bill").value ;// המרת הערך למספר
};

/** חישוב התוצאות */
const finalResult = () => {
  if (NumberOfPepole <= 0) {
    alert("Number of people must be greater than 0");
    return;
  }

  const tipAmount = (Bill * (tip / 100)) / NumberOfPepole; // חישוב סכום הטיפ
  const total = Bill / NumberOfPepole + tipAmount; // חישוב הסכום הכולל לאדם

  // עדכון התוצאות ב-HTML
  document.getElementById("tip-amount").innerHTML = `$${tipAmount.toFixed(2)}`;//התוצאה עם שתי ספרות אחרי הנקודה
  document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
};

/** מאזינים לשדות הקלט */
document.getElementById("bill").addEventListener("input", updatedResults);
document.getElementById("people").addEventListener("input", updatedResults);

/**מאזין לsubmit */
document.getElementById("submit").addEventListener("click", finalResult);

/** כפתור RESET */
document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
  tip = 0;
  Bill = 0;
  NumberOfPepole = 0;
});
