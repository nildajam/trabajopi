// Form
const register = document.forms.completeForm;

// Options
const option1 = document.getElementById("studentCard");
const option2 = document.getElementById("traineeCard");
const option3 = document.getElementById("juniorCard");
const options = document.getElementsByClassName("card");

// Buttons
const cancelButton = document.getElementById("cancel");
const summaryButton = document.getElementById("summary");

// Select
const select = document.querySelector("#selections");

// To pay
const toPay = document.querySelector(".total");

// Selected option
function selectedOption() {
  select.value === "student" && frameClick(option1);
  select.value === "trainee" && frameClick(option2);
  select.value === "junior" && frameClick(option3);
}

select.addEventListener("change", selectedOption);
