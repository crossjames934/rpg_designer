import React, {Component} from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";

class Main extends Component {
  state = {
    levels: [],
    chosenLevelIndex: [],
    modalOpen: false,
  };

  chooseLevel = (chosenLevelIndex) => {
    this.setState({chosenLevelIndex});
  };

  changeModalOpen = (modalOpen) => {
    this.setState({modalOpen});
  };

  updateLevels = (levels) => {
    this.setState({levels});
  };

  render() {
    const {chooseLevel, changeModalOpen, updateLevels} = this;
    const stateFunctions = {chooseLevel, changeModalOpen, updateLevels};
    const controlPanelProps = {...this.state, ...stateFunctions};
    return (
      <div>
        <ControlPanel {...controlPanelProps}/>
      </div>
    );
  }
}

export default Main;