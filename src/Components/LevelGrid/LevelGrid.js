import React, {Component} from 'react';

class LevelGrid extends Component {
  tile = (tileValue, index) => {
    return(
      <div key={"tile_"+index} onClick={() => { this.clickTile(index)}}>
        {tileValue}
      </div>
    )
  };

  clickTile = (index) => {

  };

  render() {
    const {level} = this.props;
    if (!level) return null;
    const {width, height, bgTiles} = level;
    const gridTemplateColumns = `repeat(${width}, 30px)`;
    const gridTemplateRows = `repeat(${height}, 30px)`;
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns,
      gridTemplateRows,
      maxHeight: '100%',
      maxWidth: '100%',
      overflow: 'scroll',
      gridArea: 'tilegrid',
    };
    return (
      <div style={gridStyle}>
        {bgTiles.map((tileValue, index) => this.tile(tileValue, index))}
      </div>
    );
  }
}

export default LevelGrid;