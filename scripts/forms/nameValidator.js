const nameInput = document.getElementById("name");

let regEx = /^[A-Za-z-]{3,}$/;

export function validateName(name) {
  if (regEx.test(name)) {
    console.log("valid name");
    return true;
  } else {
    console.log("invalid name");
    nameInput.setCustomValidity('Nom incorrect : 3 caractères minimum (tiret "-" autorisé)');
    return false;
  }
}
