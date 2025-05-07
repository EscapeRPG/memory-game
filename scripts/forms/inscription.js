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

async function createAccount(e) {
  e.preventDefault();

const userName = nameInput.value,
  userMail = mailInput.value,
  userPassword = passwordInput.value;

  let name = validateName(userName, nameError);
  let mail = validateMail(userMail, mailError);
  let password = validatePassword(userPassword, passwordError);
  let confirmPass = validateConfirmPass(
    userPassword,
    confirmPassword.value,
    confirmPassError
  );

  if (name && mail && password && confirmPass) {
    if (!localStorage.getItem(userName)) {
      const hashedPassword = await cryptPassword(userPassword);
      const userData = [userMail, hashedPassword];
      localStorage.setItem(userName, JSON.stringify(userData));
    } else {
      alert(
        "Cet utilisateur existe déjà ! Veuillez choisir un autre pseudo ou vous connecter."
      );
    }
  }
}

function cancel() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";
}

async function cryptPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
