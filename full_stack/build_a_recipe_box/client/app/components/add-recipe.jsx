import React from 'react';
import { ButtonToolbar, Button, Modal, FormGroup, FormControl, ControlLabel  } from 'react-bootstrap';

import Api from '../actions/crudApi';

var AddRecipe = React.createClass({
  getInitialState(){
    return {
      show: false,
      title: undefined,
      text: undefined
    };
  },
  handleChange(e){
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    })
  },
  handleNewRecipe: function(e) {
    e.preventDefault();

    if (this.state.title && this.state.text) {
      Api.postRecipe(this.state.title, this.state.text).then(function () {
        console.log('Sucess! Your data was submitted');
      }).catch(function (error) {
        throw error;
      });
    }else {
      console.log('Unable to add data');
    }
  },
  render: function() {
    let close = () => this.setState({show: false});
    return(
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Add Recipe
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe</ControlLabel>
                <FormControl name='title' value={this.state.title} onChange={this.handleChange} placeholder="Recipe Name"/>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl name='text' value={this.state.text} onChange={this.handleChange} componentClass="textarea" placeholder="Enter ingredients separated by commas" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleNewRecipe}>Add Recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
});

module.exports = AddRecipe;
