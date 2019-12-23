import React, {Component} from 'react';
import './ControlPanel.css';
import LevelSelector from "../LevelSelector/LevelSelector";
import AddLevelBtn from "../AddLevelBtn/AddLevelBtn";
import AddLevelModal from "../AddLevelModal/AddLevelModal";

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="d-flex">
          <AddLevelBtn {...this.props} />
          <LevelSelector {...this.props}/>
          <AddLevelModal {...this.props}/>
        </div>
      </div>
    );
  }
}

export default ControlPanel;