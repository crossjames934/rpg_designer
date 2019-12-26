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
  this.copySelf = function() {
    const {name, width, height, bgTiles, fgTiles, functionalTiles, additionalTiles, gameObjects, tileSetIndex, copySelf} = this;
    return {name, width, height, bgTiles, fgTiles, functionalTiles, additionalTiles, gameObjects, tileSetIndex, copySelf};
  };
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
//
// Level.prototype.copySelf = function() {
//   const {name, width, height, bgTiles, fgTiles, functionalTiles, additionalTiles, gameObjects, tileSetIndex} = this;
//   return {name, width, height, bgTiles, fgTiles, functionalTiles, additionalTiles, gameObjects, tileSetIndex};
// };

export default Level;