import React, {Component} from 'react';
import {Button} from 'reactstrap';

class AddLevelBtn extends Component {
  render() {
    const {changeModalOpen} = this.props;
    return (
      <div className="mr-2">
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