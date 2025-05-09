const confirmPasswordInput = document.getElementById("confirmPass");

export function validateConfirmPass(
  password,
  confirmPassword,
  confirmPassError
) {
  if (password === confirmPassword) {
    if (confirmPassError.classList.contains("error")) {
      confirmPassError.classList.remove("error");
    }
    return true;
  } else {
    confirmPassError.classList.add("error");
    return false;
  }
}

confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === password.value) {
    if (confirmPassError.classList.contains("error")) {
      confirmPassError.classList.remove("error");
    }
    confirmPasswordInput.style.backgroundImage =
      'url("/assets/check.svg")';
  } else if (confirmPasswordInput.value === "") {
    confirmPasswordInput.style.backgroundImage = "none";
  } else {
    confirmPassError.classList.add("error");
    confirmPasswordInput.style.backgroundImage =
      'url("/assets/error.svg")';
  }
});
