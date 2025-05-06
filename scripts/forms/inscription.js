import { validateName } from "./nameValidator.js";
import { validateMail } from "./mailValidator.js";
import { validatePassword } from "./passwordValidator.js";

const submitButton = document.getElementById("createAccount"),
  cancelButton = document.getElementById("cancel"),
  nameInput = document.getElementById("name"),
  mailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password"),
  confirmPassword = document.getElementById("confirmPass");

submitButton.addEventListener("click", createAccount);
cancelButton.addEventListener("click", cancel);

function createAccount(e) {
  let name = validateName(nameInput.value);
  let mail = validateMail(mailInput.value);
  let password = validatePassword(passwordInput.value, confirmPassword.value);

  if (name && mail && password) {
    // Do something
  }
  e.preventDefault();
}

function cancel() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";
}
