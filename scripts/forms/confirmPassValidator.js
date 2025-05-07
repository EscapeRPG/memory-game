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
  } else {
    confirmPassError.classList.add("error");
  }
});
