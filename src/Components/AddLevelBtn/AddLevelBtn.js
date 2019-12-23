import React, {Component} from 'react';
import {Button} from 'reactstrap';

class AddLevelBtn extends Component {
  render() {
    const {changeModalOpen} = this.props;
    return (
      <div>
        <Button onClick={() => {
          changeModalOpen(true)
        }}>
          Add New Level
        </Button>
      </div>
    );
  }
}

export default AddLevelBtn;