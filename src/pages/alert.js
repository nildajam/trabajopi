let form = sessionStorage.getItem("completeForm");
form = JSON.parse(form);

const pass = document.getElementById("pass");
document.getElementById("name").innerText = `Nombre: ${form.nombre}`;
lastName.innerText = `Apellido: ${form.apellido}`;
email.innerHTML = `Email: ${form.email}`;
quantity.innerHTML = `Entradas: ${form.cantidad}`;
pass.innerText = `Categoría: ${form.categoria}`;
total.innerText = `Total: $ ${form.total}`;

total.style.cursor = "pointer";
total.addEventListener("click", () => {
  location.href = "index.html";
});

Swal.fire({
  position: "center",
  icon: "success",
  title: `${form.nombre}` + ` ${form.apellido} <br> Total: $ ${form.total}`,
  confirmButtonText: "Comprar",
  text: `Categoría: ${form.categoria}`,
  footer: `Entradas: ${form.cantidad} - Email: ${form.email}`,
});
