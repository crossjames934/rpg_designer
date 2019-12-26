function Level(name, width, height) {
  const totalTiles = width * height;
  this.name = name;
  this.width = width;
  this.height = height;
  this.bgTiles = new Uint8Array(totalTiles);
  this.fgTiles = new Uint8Array(totalTiles);
  this.functionalTiles = new Uint8Array(totalTiles);
  this.additionalTiles = new Uint8Array(totalTiles);
  this.gameObjects = [];
  this.tileSetIndex = 0;
}

Level.prototype.getValue = (x, y, tilePropertyName) => {
  const tiles = this[tilePropertyName];
  const position = y * this.width + x;
  return tiles[position];
};

Level.prototype.saveValue = (value, x, y, tilePropertyName) => {
  const position = y * this.width + x;
  this[tilePropertyName][position] = value;
};

export default Level;