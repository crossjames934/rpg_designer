import React, {Component} from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";
import LevelGrid from "../LevelGrid/LevelGrid";

class Main extends Component {
  state = {
    levels: [],
    chosenLevelIndex: 0,
    modalOpen: false,
  };

  chooseLevel = async (chosenLevelIndex) => {
    await this.setState({chosenLevelIndex});
  };

  changeModalOpen = async (modalOpen) => {
    await this.setState({modalOpen});
  };

  updateLevels = async (levels) => {
    await this.setState({levels});
  };

  updateCurrentLevel = async (level) => {
    const {levels, chosenLevelIndex} = this.state;
    const levelsCopy = JSON.parse(JSON.stringify(levels));
    levelsCopy[chosenLevelIndex] = level;
  };

  render() {
    const {chooseLevel, changeModalOpen, updateLevels, updateCurrentLevel} = this;
    const {levels, chosenLevelIndex} = this.state;
    const stateFunctions = {chooseLevel, changeModalOpen, updateLevels};
    const controlPanelProps = {...this.state, ...stateFunctions};
    const currentLevel = levels[chosenLevelIndex];
    return (
      <div>
        <ControlPanel {...controlPanelProps}/>
        <LevelGrid level={currentLevel} updateCurrentLevel={updateCurrentLevel}/>
      </div>
    );
  }
}

export default Main;