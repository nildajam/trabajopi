function cancel(e) {
  e.preventDefault();
  register.name.value = "";
  register.lastName.value = "";
  register.email.value = "";
  register.quantity.value = "";
  register.category.value = "";
  toPay.textContent = "";

  for (let item of options) {
    item.classList.replace("border-2", "border");
    item.ariaChecked = false;
  }
}

function errorValidate(value, placeholder) {
  value.value === ""
    ? value.classList.add("border-danger")
    : value.classList.remove("border-danger");
  if (placeholder) {
    value.placeholder = placeholder;
  }
}

function checkError() {
  let data = false;

  const pass =
    (register.category.value === "student" && "Estudiante") ||
    (register.category.value === "trainee" && "Trainee") ||
    (register.category.value === "junior" && "Junior");

  errorValidate(register.name, "Ingrese un Nombre");
  errorValidate(register.lastName, "Ingrese un Apellido");
  errorValidate(register.email, "Ingrese un correo");
  errorValidate(register.quantity);

  !pass
    ? register.category.classList.add("border-danger")
    : register.category.classList.remove("border-danger");

  if (
    pass &&
    register.name.value &&
    register.lastName.value &&
    register.email.value &&
    register.quantity.value
  ) {
    data = {
      nombre: register.name.value,
      apellido: register.lastName.value,
      email: register.email.value,
      cantidad: register.quantity.value,
      categoria: pass,
      total: toPay.textContent,
    };
  }

  return data;
}

function finish() {
  location.href = "alert.html";
}

function summary(e) {
  e.preventDefault();

  let numberTickets = document.querySelector(".numberTickets");

  if (Number(numberTickets.value)) {
    let selectedCategory = document.querySelector(".selectedCategory");
    let totalPayment;

    switch (selectedCategory.value) {
      case "student": {
        totalPayment = 200 * numberTickets.value * 0.2;
        break;
      }

      case "trainee": {
        totalPayment = 200 * numberTickets.value * 0.5;
        break;
      }

      case "junior": {
        totalPayment = 200 * numberTickets.value * 0.85;
        break;
      }
    }
    toPay.textContent = `${totalPayment}`;
  } else {
    numberTickets.value = "";
    numberTickets.placeholder = "Ingrese una cantidad";
  }

  const completedForm = checkError();
  completedForm &&
    sessionStorage.setItem("completeForm", JSON.stringify(completedForm));
  completedForm && finish();
}

cancelButton.onclick = (e) => {
  cancel(e);
};

summaryButton.onclick = (e) => {
  summary(e);
};
