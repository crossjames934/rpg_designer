class Level {
  constructor(name, width, height) {
    const totalTiles = width * height;
    this.name = name;
    this.width = width;
    this.height = height;
    this.bgTiles = "0".repeat(totalTiles);
    this.fgTiles = "0".repeat(totalTiles);
    this.functionalTiles = "0".repeat(totalTiles);
    this.additionalTiles = "0".repeat(totalTiles);
    this.gameObjects = [];
    this.tileSetIndex = 0;
  }
}

export default Level;