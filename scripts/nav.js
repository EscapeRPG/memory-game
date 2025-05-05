const accueil = document.getElementById("accueilLien"),
  jouer = document.getElementById("jouerLien"),
  connexion = document.getElementById("connexionLien"),
  compte = document.getElementById("compteLien");

const page = window.location.href.substring(
  window.location.href.lastIndexOf("/") + 1
);

function currentPage() {
  switch (page) {
    case "jouer.html":
      jouer.classList.add("current");
      break;
    case "connexion.html":
    case "inscription.html":
      connexion.classList.add("current");
      break;
    case "compte.html":
      compte.classList.add("current");
      break;
    default:
      accueil.classList.add("current");
      break;
  }
}

window.addEventListener("load", currentPage);