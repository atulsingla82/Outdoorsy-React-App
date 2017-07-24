import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Panel, FormControl, FormGroup, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

export default class CreateOuting extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible : false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
      this.setState({
        visible : true
      });
  }

  closeModal() {
      this.setState({
        visible : false
      });
  }
 
  handleSubmit(event) {
    event.preventDefault();
    /*TODO: Code for POSTing to MongoDB goes here?*/
    helpers.createOuting(this.state)
  }

  render() {
    return (
      <section>
        <input 
        	type="button" 
        	value="Plan an Outing" 
        	onClick={() => this.openModal()} 
        />
        <Modal
          className="modalContainer" 
        	visible={this.state.visible} 
        	width="50%" 
          height="50%"
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <Panel>
              <h1>Let's Go!</h1>
              <FormGroup controlId="formBasicText">
    	            <ControlLabel>Location </ControlLabel>
    	            <FormControl
    	            	name="location"
                    readOnly="readOnly"
                    value={this.props.selectedPlace.name}
                    placeholder={this.props.selectedPlace.name}
    	            	type="text"
    	            />
                  <ControlLabel>Activity </ControlLabel><br />
                  <FormControl
                    name="activity"
                    readOnly="readOnly"
                    value={this.props.activity}
                    placeholder={this.props.activity}
                    type="text"
                  />
                  <br />
    	            <ControlLabel>Date </ControlLabel><br />
    	            <FormControl
    	            	name="date"
    	            	type="date"
    	            />
                  <br />
    	            <ButtonToolbar>
                    <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    <Button href="javascript:void(0);" onClick={() => this.closeModal()}>Close</Button>
                  </ButtonToolbar>
              </FormGroup>
              </Panel>
          </div>
        </Modal>
      </section>
  	);
  }
}