let tileType, tileSetLength, imageFormat;

if (localStorage.getItem("connected")) {
  const user = localStorage.getItem("connected");
  const userData = JSON.parse(localStorage.getItem(user));

  tileType = userData[3];
  switch (tileType) {
    case "alphabet-scrabble":
      tileSetLength = 26;
      imageFormat = "png";
      break;
    case "animaux":
      tileSetLength = 28;
      imageFormat = "webp";
      break;
    case "animauxAnimes":
      tileSetLength = 8;
      imageFormat = "webp";
      break;
    case "chiens":
      tileSetLength = 10;
      imageFormat = "webp";
      break;
    case "memory-legume":
      tileSetLength = 6;
      imageFormat = "svg";
      break;
    case "animauxdomestiques":
    case "dinosauresAvecNom":
    default:
      tileSetLength = 10;
      imageFormat = "jpg";
      break;
  }
} else {
  tileType = "dinosaures";
  tileSetLength = 10;
  imageFormat = "jpg";
}

const tileSet = [];

for (let index = 1; index <= tileSetLength; index++) {
  tileSet.push(
    `<img src="assets/${tileType}/${index}.${imageFormat}" alt="${tileType}${index}" class="hidden">`
  );
}

export function tileSetManager(chosenDifficulty) {
  const gameTileSet = [];

  while (gameTileSet.length < chosenDifficulty) {
    let random = Math.floor(Math.random() * tileSet.length);

    if (!gameTileSet.includes(tileSet[random])) {
      gameTileSet.push(tileSet[random], tileSet[random]);
    }
  }

  gameTileSet.sort((a, b) => 0.5 - Math.random());

  return gameTileSet;
}
