import { cryptPassword } from "./crypt.js";

const nameInput = document.getElementById("name"),
  passwordInput = document.getElementById("password"),
  submitButton = document.getElementById("connect"),
  cancelButton = document.getElementById("cancel");

submitButton.addEventListener("click", connect);
cancelButton.addEventListener("click", cancel);

async function connect(e) {
  e.preventDefault();

  const userName = nameInput.value,
    userPassword = passwordInput.value;

    if (localStorage.getItem(userName)) {
        const userData = JSON.parse(localStorage.getItem(userName));
        const hashedPassword = await cryptPassword(userPassword);
        if (hashedPassword === userData[1]) {
          console.log("oui");
          localStorage.setItem('connected', userName)
          window.location.href = 'compte.html'
        } else {
          alert('Mot de passe incorrect !')
        }
    } else {
        alert('Cet utilisateur n\'existe pas !')
    }
}

function cancel() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  confirmPassword.value = "";
}
