export function saveScore(nom, score, taille, theme) {
  if (!localStorage.getItem("scores")) {
    localStorage.setItem("scores", JSON.stringify({ parties: [] }));
  }

  const newGame = {
    nom: nom,
    score: score,
    taille: taille,
    theme: theme,
    date: new Date().toLocaleDateString(),
  };
  const data = JSON.parse(localStorage.getItem("scores"));

  data.parties.push(newGame);

  localStorage.setItem("scores", JSON.stringify(data));
}
