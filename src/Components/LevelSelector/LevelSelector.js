import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class LevelSelector extends Component {
  render() {
    const {chooseLevel, chosenLevelIndex, levels} = this.props;
    const noLevels = levels.length === 0;
    const toggleText = noLevels ? "Please Add A Level" : levels[chosenLevelIndex].name;
    return (
      <div>
        <Dropdown>
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