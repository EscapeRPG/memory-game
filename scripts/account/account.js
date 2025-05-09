const profilePic = document.getElementById("avatar"),
  changeAvatar = document.getElementById("changeAvatar"),
  hiddenInput = document.getElementById("file"),
  tileSetTheme = document.getElementById("tileSetTheme"),
  tileSetThemePreview = document.getElementById("tileTheme"),
  userNameInput = document.getElementById("name"),
  userMailInput = document.getElementById("email"),
  saveChangesButton = document.getElementById("saveChanges"),
  disconnectButton = document.getElementById("disconnect"),
  lastScores = document.getElementById("tableBody");

let user, userData, hashedPassword, avatar, tileTheme;

saveChangesButton.addEventListener("click", saveChanges);
disconnectButton.addEventListener("click", disconnectUser);

changeAvatar.addEventListener("click", function(e) {
  e.preventDefault();
  hiddenInput.click();
});

hiddenInput.addEventListener("change", setNewAvatar)

tileSetTheme.addEventListener("change", () => {
  changeTheme(tileSetTheme.value);
});

function setNewAvatar() {
  let newAvatar = hiddenInput.files[0];

  if (newAvatar) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profilePic.src = e.target.result;
      avatar = e.target.result;
    };

    reader.readAsDataURL(newAvatar);
  }
  console.log(avatar);
}

function changeTheme(theme) {
  tileSetThemePreview.src = `assets/${theme}/memory_detail_${theme}.png`;
  tileTheme = theme;
}

function saveChanges(e) {
  e.preventDefault();
  const userName = userNameInput.value,
    userMail = userMailInput.value,
    newTileSetTheme = tileSetTheme.value;
  if (userName === user && userMail === userData[0]) {
    userData = [userMail, hashedPassword, avatar, newTileSetTheme];
    localStorage.setItem(userName, JSON.stringify(userData));
    window.location.reload();
  } else {
    console.log("erreur");
  }
}

function disconnectUser() {
  localStorage.removeItem("connected");
}

function checkConnexion() {
  if (localStorage.getItem("connected")) {
    user = localStorage.getItem("connected");
    userData = JSON.parse(localStorage.getItem(user));
    userNameInput.value = user;
    userMailInput.value = userData[0];
    changeAvatar.value = userData[2];
    avatar = changeAvatar.value;
    hashedPassword = userData[1];
    profilePic.src = userData[2];
    tileSetTheme.value = userData[3];
    tileSetThemePreview.src = `assets/${userData[3]}/memory_detail_${userData[3]}.png`;

    if (localStorage.getItem("scores")) {
      const scoresData = JSON.parse(localStorage.getItem("scores"));
      scoresData.parties.forEach((game) => {
        if (game.nom === user) {
          lastScores.innerHTML += `
          <tr>
            <td>${game.nom}</td>
            <td>${game.score}</td>
            <td>${game.taille}</td>
            <td>${game.theme}</td>
            <td>${game.date}</td>
          </tr>
        `;
        }
      });
    } else {
      lastScores.innerHTML = '<td colspan="5">Aucune partie enregistrée pour le moment</td>';
    }
  } else {
    alert(
      `Vous n'êtes pas connecté, veuillez d'abord le faire pour accéder à cette page.`
    );
    window.location.href = "connexion.html";
  }
}

window.addEventListener("load", checkConnexion);
