import React, {Component} from 'react';
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
    );
  };

  tileCharCollection = () => {
    let content = [];
    for (let i = 0; i <= 255; i++) {
      content.push(this.selectableTile(i));
    }
    return content;
  };

  render() {
    return (
      <div className="tileSelectorPanel">
        <div className="d-flex flex-wrap">
          {this.tileCharCollection()}
        </div>
      </div>
    );
  }
}

export default TileSelectorPanel;