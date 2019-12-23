import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import Level from "../../GameObjects/Level";

class AddLevelModal extends Component {
  state = {
    name: "",
    width: 25,
    height: 20,
  };

  submitNewLevel = async () => {
    const {levels, updateLevels, changeModalOpen} = this.props;
    const {name, width, height} = this.state;
    await updateLevels([...levels, new Level(name, width, height)]);
    changeModalOpen(false);
  };

  formGroupInput = (groupName) => {
    const inputID = "input_" + groupName;
    const inputType = groupName === "name" ? "text" : "number";
    return(
      <FormGroup key={"form_group_"+groupName}>
        <Label for={inputID}>
          {groupName.toUpperCase()}
        </Label>
        <Input
          onChange={(e) => { this.setState({[e.target.name]: e.target.value}) }}
          name={groupName}
          type={inputType}
          id={inputID}
          value={this.state[groupName]}
        />
      </FormGroup>
    )
  };

  render() {
    const {modalOpen, changeModalOpen} = this.props;
    const formGroups = ["name", "width", "height"];
    return (
      <Modal isOpen={modalOpen}>
        <ModalHeader>
          Add New Level
        </ModalHeader>
        <ModalBody>
          <Form>
            {formGroups.map(groupName => this.formGroupInput(groupName))}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {changeModalOpen(false)}}>
            Cancel
          </Button>
          <Button color="success" onClick={this.submitNewLevel}>
            Done
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddLevelModal;