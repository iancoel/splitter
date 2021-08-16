
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
}

tipOptions.forEach((tipOption) => {
  tipOption.addEventListener('click', toggleTipClasses);
})

// Get tip value from innerHTML by removing %
const selectedTipValue = (+document.querySelector(".active").innerHTML.replace('%', '') / 100);

// Get number of people as a number
const peopleInput = document.querySelector('#people');
let numberOfPeople;
peopleInput.addEventListener('change', updatePeopleValue)

function updatePeopleValue() {
  numberOfPeople = +this.value;
}

