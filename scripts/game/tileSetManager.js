let tileType;

if (localStorage.getItem("tileSetType")) {
  tileType = localStorage.getItem("tileSetType");
} else {
  tileType = "dinosaures";
}

const tileSet = [
  `<img src="assets/${tileType}/1.jpg" alt="${tileType}1" class="hidden">`,
  `<img src="assets/${tileType}/2.jpg" alt="${tileType}2" class="hidden">`,
  `<img src="assets/${tileType}/3.jpg" alt="${tileType}3" class="hidden">`,
  `<img src="assets/${tileType}/4.jpg" alt="${tileType}4" class="hidden">`,
  `<img src="assets/${tileType}/5.jpg" alt="${tileType}5" class="hidden">`,
  `<img src="assets/${tileType}/6.jpg" alt="${tileType}6" class="hidden">`,
  `<img src="assets/${tileType}/7.jpg" alt="${tileType}7" class="hidden">`,
  `<img src="assets/${tileType}/8.jpg" alt="${tileType}8" class="hidden">`,
  `<img src="assets/${tileType}/9.jpg" alt="${tileType}9" class="hidden">`,
  `<img src="assets/${tileType}/10.jpg" alt="${tileType}10" class="hidden">`,
];

export function tileSetManager(chosenDifficulty) {
  const gameTileSet = [];

  while (gameTileSet.length < chosenDifficulty) {
    let random = Math.floor(Math.random() * tileSet.length);

    if (!gameTileSet.includes(tileSet[random])) {
      gameTileSet.push(tileSet[random]);
      gameTileSet.push(tileSet[random]);
    }
  }

  gameTileSet.sort((a, b) => 0.5 - Math.random());

  return gameTileSet;
}
