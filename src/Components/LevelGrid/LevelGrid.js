import React, {Component} from 'react';
import './LevelGrid.css';

class LevelGrid extends Component {
  tile = (tileValue, index) => {
    return(
      <div key={"tile_"+index} className="test_tile" onClick={() => { this.clickTile(index)}}>
        {tileValue.toString()}
      </div>
    )
  };

  clickTile = (index) => {
    console.log("GEEZERLICIOUS");
    const {level, clickedTileValue, updateCurrentLevel} = this.props;
    const levelCopy = level.copySelf();
    levelCopy.bgTiles[index] = parseInt(clickedTileValue);
    console.log(levelCopy);
    void updateCurrentLevel(levelCopy);
  };

  tileCollection = (tiles) => {
    let content = [];
    for (let i = 0; i < tiles.length; i++) {
      content.push(this.tile(tiles[i], i));
    }
    return content;
  };

  render() {
    const {level} = this.props;
    if (!level) return <div className="levelGrid">No Level Selected</div>;
    const {width, height, bgTiles} = level;
    const gridTemplateColumns = `repeat(${width}, 30px)`;
    const gridTemplateRows = `repeat(${height}, 30px)`;
    const gridStyle = {
      gridTemplateColumns,
      gridTemplateRows,
    };
    return (
      <div style={gridStyle} className="levelGrid">
        {this.tileCollection(bgTiles)}
      </div>
    );
  }
}

export default LevelGrid;