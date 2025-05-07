const passwordInput = document.getElementById("password"),
  weakPass = document.getElementById("weak"),
  mediumPass = document.getElementById("medium"),
  strongPass = document.getElementById("strong"),
  passwordStrongness = document.getElementById("passwordStrongness");

let regEx =
  /^(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z\d!@#$%^&*()_\-+=<>?]{6,}$/;

export function validatePassword(password, passwordError) {
  if (regEx.test(password)) {
    if (passwordError.classList.contains("error")) {
      passwordError.classList.remove("error");
    }
    return true;
  } else {
    passwordError.classList.add("error");
    return false;
  }
}

passwordInput.addEventListener("input", () => {
  if (regEx.test(passwordInput.value)) {
    if (passwordError.classList.contains("error")) {
      passwordError.classList.remove("error");
    }
  } else {
    passwordError.classList.add("error");
  }

  if (regEx.test(passwordInput.value) && passwordInput.value.length > 9) {
    strongPass.classList.remove("hidden");
    mediumPass.classList.remove("hidden");
  } else if (regEx.test(passwordInput.value)) {
    mediumPass.classList.remove("hidden");
    strongPass.classList.add("hidden");
  } else {
    weakPass.classList.remove("hidden");
    strongPass.classList.add("hidden");
    mediumPass.classList.add("hidden");
  }

  if (passwordInput.value != "") {
    passwordStrongness.style.display = "flex";
  } else {
    passwordStrongness.style.display = "none";
  }
});
