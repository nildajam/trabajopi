function frameOver(frame) {
  frame.classList.replace("bg-light", "bg-dark");
}

function frameLeave(frame) {
  frame.classList.replace("bg-dark", "bg-light");
}

function frameClick(frame) {
  frame.ariaChecked = true;
  frame.classList.replace("bg-dark", "border-2");
  frame.classList.replace("bg-light", "border-2");

  select.value =
    (frame.id === "studentCard" && "student") ||
    (frame.id === "traineeCard" && "trainee") ||
    (frame.id === "juniorCard" && "junior");

  for (let item of options) {
    if (item.id !== frame.id) {
      item.classList.replace("border-2", "border");
      item.ariaChecked = false;
    }
  }
}

function assignEvents(frame) {
  frame.addEventListener("mouseover", () => frameOver(frame));
  frame.addEventListener("mouseleave", () => frameLeave(frame));
  frame.addEventListener("click", () => frameClick(frame));
}

assignEvents(studentCard);
assignEvents(traineeCard);
assignEvents(juniorCard);
