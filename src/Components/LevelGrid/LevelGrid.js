import React, {Component} from 'react';

class LevelGrid extends Component {
  tile = (tileValue, index) => {
    return(
      <div key={"tile_"+index}>
        {tileValue}
      </div>
    )
  };

  render() {
    const {level} = this.props;
    if (!level) return null;
    const {name, width, height, bgTiles} = level;
    const gridTemplateColumns = `repeat(${width}, 20px)`;
    const gridTemplateRows = `repeat(${height}, 20px)`;
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns,
      gridTemplateRows
    };
    const tiles = bgTiles.split("");
    return (
      <div style={gridStyle}>
        {tiles.map((tileValue, index) => this.tile(tileValue, index))}
      </div>
    );
  }
}

export default LevelGrid;