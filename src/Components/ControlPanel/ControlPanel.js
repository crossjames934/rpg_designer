import React, {Component} from 'react';
import {Card} from 'reactstrap';
import LevelSelector from "../LevelSelector/LevelSelector";
import AddLevelBtn from "../AddLevelBtn/AddLevelBtn";
import AddLevelModal from "../AddLevelModal/AddLevelModal";

class ControlPanel extends Component {
  render() {
    return (
      <Card>
        <div className="d-flex">
          <LevelSelector {...this.props}/>
          <AddLevelBtn {...this.props} />
          <AddLevelModal {...this.props}/>
        </div>
      </Card>
    );
  }
}

export default ControlPanel;