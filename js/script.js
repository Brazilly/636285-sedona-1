var link = document.querySelector(".booking-button");
var popup = document.querySelector(".booking-form");

var dateOfEntry = popup.querySelector("[name=date-of-entry]");
var dateOfDeparture = popup.querySelector("[name=date-of-departure]");

var amountOfAdults = popup.querySelector("[name=amount-of-adults]");
var amountOfChildren = popup.querySelector("[name=amount-of-children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("booking-form-shake");
  popup.classList.toggle("booking-form-open");
  dateOfEntry.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("booking-form-open");
  }
});

popup.addEventListener("submit", function (evt) {
  if (!dateOfEntry.value || !dateOfDeparture.value || !amountOfAdults.value || !amountOfChildren.value) {
    evt.preventDefault();
    popup.classList.add("booking-form-shake");
  }
});
