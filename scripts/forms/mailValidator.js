const mailInput = document.getElementById("email");

let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateMail(mail, mailError) {
  if (regEx.test(mail)) {
    if (mailError.classList.contains("error")) {
      mailError.classList.remove("error");
    }
    return true;
  } else {
    mailError.classList.add("error");
    return false;
  }
}

mailInput.addEventListener("input", () => {
  if (regEx.test(mailInput.value)) {
    if (mailError.classList.contains("error")) {
      mailError.classList.remove("error");
    }
  } else {
    mailError.classList.add("error");
  }
});
