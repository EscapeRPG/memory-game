const nameInput = document.getElementById("name");

let regEx = /^[A-Za-z-]{3,}$/;

export function validateName(name, nameError) {
  if (regEx.test(name)) {
    if (nameError.classList.contains("error")) {
      nameError.classList.remove("error");
    }
    return true;
  } else {
    nameError.classList.add("error");
    return false;
  }
}

nameInput.addEventListener("input", () => {
  if (regEx.test(nameInput.value)) {
    if (nameError.classList.contains("error")) {
      nameError.classList.remove("error");
    }
  } else {
    nameError.classList.add("error");
  }
});
