import React, {Component} from 'react';
import ControlPanel from "../ControlPanel/ControlPanel";
import LevelGrid from "../LevelGrid/LevelGrid";
import TileSelectorPanel from "../TileSelectorPanel/TileSelectorPanel";

class Main extends Component {
  state = {
    levels: [],
    chosenLevelIndex: 0,
    modalOpen: false,
    clickedTileValue: 1,
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

  updateClickedTileValue = async (clickedTileValue) => {
    await this.setState({clickedTileValue});
  };

  render() {
    const {chooseLevel, changeModalOpen, updateLevels, updateCurrentLevel, updateClickedTileValue} = this;
    const {levels, chosenLevelIndex, clickedTileValue} = this.state;
    const stateFunctions = {chooseLevel, changeModalOpen, updateLevels};
    const controlPanelProps = {...this.state, ...stateFunctions};
    const level = levels[chosenLevelIndex];
    const levelGridProps = {level, clickedTileValue, updateCurrentLevel};
    const tileSelectorPanelProps = {clickedTileValue, updateClickedTileValue};
    return (
      <div className="mainApp">
        <ControlPanel {...controlPanelProps}/>
        <TileSelectorPanel {...tileSelectorPanelProps}/>
        <LevelGrid {...levelGridProps}/>
      </div>
    );
  }
}

export default Main;