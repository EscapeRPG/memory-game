import { validateName } from "./nameValidator.js";
import { validateMail } from "./mailValidator.js";
import { validatePassword } from "./passwordValidator.js";
import { validateConfirmPass } from "./confirmPassValidator.js";

const submitButton = document.getElementById("createAccount"),
  cancelButton = document.getElementById("cancel"),
  nameInput = document.getElementById("name"),
  nameError = document.getElementById("nameError"),
  mailInput = document.getElementById("email"),
  mailError = document.getElementById("mailError"),
  passwordInput = document.getElementById("password"),
  passwordError = document.getElementById("passwordError"),
  confirmPassword = document.getElementById("confirmPass"),
  confirmPassError = document.getElementById("confirmPassError");

submitButton.addEventListener("click", createAccount);
cancelButton.addEventListener("click", cancel);

function createAccount(e) {
  let name = validateName(nameInput.value, nameError);
  let mail = validateMail(mailInput.value, mailError);
  let password = validatePassword(passwordInput.value, passwordError);
  let confirmPass = validateConfirmPass(
    passwordInput.value,
    confirmPassword.value,
    confirmPassError
  );

  if (name && mail && password && confirmPass) {
    if (!localStorage.getItem(nameInput.value)) {
      localStorage.setItem(nameInput.value, [
        mailInput.value,
        passwordInput.value,
      ]);
    } else {
      alert(
        "Cet utilisateur existe déjà ! Veuillez choisir un autre pseudo ou vous connecter."
      );
    }
  }
  e.preventDefault();
}

function cancel() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";
}
