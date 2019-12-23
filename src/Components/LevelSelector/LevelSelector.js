import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class LevelSelector extends Component {
  state = {
    dropdownOpen: false,
  };

  toggleDropdown = () => { this.setState({dropdownOpen: !this.state.dropdownOpen}) };

  render() {
    const {chooseLevel, chosenLevelIndex, levels} = this.props;
    const {dropdownOpen} = this.state;
    const noLevels = levels.length === 0;
    const toggleText = noLevels ? "<-- Please Add A Level" : levels[chosenLevelIndex].name;
    return (
      <div>
        <Dropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle caret={!noLevels} disabled={noLevels}>
            {toggleText}
          </DropdownToggle>
          <DropdownMenu>
            {levels.map((level, index) => {
              return (
                <DropdownItem
                  key={"dropdown_item_level" + index}
                  onClick={() => {
                    chooseLevel(index)
                  }}
                >
                  {level.name}
                </DropdownItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default LevelSelector;