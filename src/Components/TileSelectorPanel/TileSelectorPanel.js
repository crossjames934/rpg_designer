import React, {Component} from 'react';
import {tileChars} from "../../GameObjects/tileChars";
import './TileSelectorPanel.css';

class TileSelectorPanel extends Component {
  selectableTile = (tileChar) => {
    const {clickedTileValue, updateClickedTileValue} = this.props;
    const isChosen = clickedTileValue === tileChar;
    const displayValue = isChosen ? <b className="color-gold">{tileChar}</b> : <span>{tileChar}</span>;
    return(
      <div className="selectableTile cursor-pointer" onClick={() => updateClickedTileValue(tileChar)}>
        {displayValue}
      </div>
    )
  };

  render() {
    const allTileChars = tileChars.split("");
    return (
      <div className="tileSelectorPanel">
        <div className="d-flex flex-wrap">
          {allTileChars.map(tileChar => this.selectableTile(tileChar))}
        </div>
      </div>
    );
  }
}

export default TileSelectorPanel;