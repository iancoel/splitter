
// Update value of the bill as a number
const billInput = document.querySelector("#bill-value");
let billValue;
billInput.addEventListener('change', updateBillValue);
function updateBillValue() {
  billValue = +this.value;
}


// Add active class at clicked tip option
const tipOptions = [...document.querySelectorAll(".tip ul li button")];

function toggleTipClasses(event) {
  tipOptions.forEach((tipOption) => {
    tipOption.classList.remove('active');
  })
  event.target.classList.add('active');
  changeTip();
}

tipOptions.forEach((tipOption) => {
  tipOption.addEventListener('click', toggleTipClasses);
})

// Get tip value from innerHTML by removing %
let selectedTipValue = 0;
function changeTip () {
  selectedTipValue = (document.querySelector(".active").innerHTML.replace('%', '') / 100);
}

// Get number of people as a number
const peopleInput = document.querySelector('#people');
let numberOfPeople;
peopleInput.addEventListener('change', updatePeopleValue)

function updatePeopleValue() {
  numberOfPeople = +this.value;
}

// Get output elements
const tipResultField = document.querySelector('#tip-result');
const totalResultField = document.querySelector('#total-result');


// Update tip and total fields
function updateFields() {
  if (billValue && numberOfPeople) {
    // Calc
    let tipResult = 0;
    let totalResult = 0;
    if(!selectedTipValue) {
      tipResult = 0;
      totalResult = (billValue / numberOfPeople).toFixed(2);
    } else {
    tipResult = (billValue * selectedTipValue / numberOfPeople).toFixed(2);
    totalResult = ((billValue + (billValue * selectedTipValue)) / numberOfPeople).toFixed(2);
    }

    tipResultField.innerHTML = `$${tipResult}`;
    totalResultField.innerHTML = `$${totalResult}`; 
  }
}

// //Event listeners to update fields
billInput.addEventListener('change', updateFields);

tipOptions.forEach((tipOption) => {
  tipOption.addEventListener('click', updateFields);
});

peopleInput.addEventListener('change', updateFields);