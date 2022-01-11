// MAIN VARIABLES
var bill = 0;
var percent = 0;
var customTip = 0;
var people = 0;
var totalBill;
var customBill = 0;
var totalTip;
var tip = 0;

// MONITERING BILL INPUT
document.getElementById("bill-total").addEventListener('input', function() {
  bill = Number(this.value);
  tipCalc();
});

// MONITERING CUSTOM TIP %
document.getElementById("tip-custom").addEventListener("input", function() {
  customTip = Number(this.value) / 100;
  customTipCalc();
  console.log(customTip);
  buttonReset();

});

function buttonReset(){
for (var i = 0; i < numberOfTipButtons; i++) {
  document.querySelectorAll(".tip-btn")[i].classList.remove("clicked");
}
}

// MONITERING BUTTON INPUT %
var numberOfTipButtons = document.getElementsByClassName("tip-btn").length;
for (i = 0; i < numberOfTipButtons; i++) {
  document.querySelectorAll(".tip-btn")[i].addEventListener("click", function() {
    // LOGGING AND RUNNING BUTTON CLICKED %
    var percentClicked = this.innerHTML;
    var percentClickedOnly = percentClicked.replace(/\D/g, '')
    percent = Number(percentClickedOnly) / 100;
    tipCalc();
    //BUTTON CLICKED COLOR CHANGE
    for (var i = 0; i < 5; i++) {
      document.querySelectorAll(".tip-btn")[i].classList.remove("clicked");
      this.classList.add("clicked");
      document.getElementById("tip-custom").value = '';
      customTip = 0;
    }
  });
}



// MONITERING NUMBER OF PEOPLE
document.getElementById("people-total").addEventListener("input", function() {
  people = Number(this.value);
  var noZero = document.getElementById("no-zero");
  if (people >= 1) {
    noZero.style.visibility = "hidden";
  } else {noZero.style.visibility = "visible"}

if (customTip === 0){
  tipCalc();
} else {
  customTipCalc();
}

});

// CALCULATES TIP AND TOTALS AND SENDS TO DISPLAY
function tipCalc() {
  var regTip = bill * percent;
  var tipAmongPeople = regTip / people;
  totalBill = (bill + regTip) / people;
  let isNumber = isNaN(tipAmongPeople);
  if (isNumber === false && tipAmongPeople < Infinity) {
    document.getElementById("total-bill-output").innerHTML = "$" + totalBill.toFixed(2);
    document.getElementById("tip-amount-output").innerHTML = "$" + tipAmongPeople.toFixed(2);
  }
}

// CALCULATES CUSTOM TIP AND TOTALS AND SENDS TO DISPLAY
function customTipCalc() {
  tip = bill * customTip;
  customBill = (bill + tip) / people;
  var customTipAmongPeople = tip / people;
  let isNumber = isNaN(customTipAmongPeople);
  if (isNumber === false && customTipAmongPeople < Infinity) {
    document.getElementById("total-bill-output").innerHTML = "$" + customBill.toFixed(2);
    document.getElementById("tip-amount-output").innerHTML = "$" + customTipAmongPeople.toFixed(2);
  }
}

// RESET TO ZERO
document.getElementById("reset-button").addEventListener("click", function() {
  bill = 0;
  percent = 0;
  customTip = 0;
  people = 0;
  customBill = 0;
  tip = 0;
  buttonReset();
  document.getElementById("tip-amount-output").innerHTML = "$0.00";
  document.getElementById("total-bill-output").innerHTML = "$0.00";
  document.getElementById("bill-total").value = '0';
  document.getElementById("people-total").value = '0';
  document.getElementById("tip-custom").value = '';
});
