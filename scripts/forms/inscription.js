import { validateName } from "./nameValidator.js";
import { validateMail } from "./mailValidator.js";
import { validatePassword } from "./passwordValidator.js";
import { validateConfirmPass } from "./confirmPassValidator.js";
import { cryptPassword } from "./crypt.js";

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
      let profilePic = 'assets/question.svg';
      let tileSetTheme = "dinosaures";
      const userData = [userMail, hashedPassword, profilePic, tileSetTheme];
      localStorage.setItem(userName, JSON.stringify(userData));
      alert("Inscription réussie ! Veuillez vous connecter à présent.");
      window.location.href = "connexion.html";
    } else {
      alert(
        "Cet utilisateur existe déjà ! Veuillez choisir un autre pseudo ou vous connecter."
      );
    }
  }
}

function cancel(e) {
  e.preventDefault();
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";
}
