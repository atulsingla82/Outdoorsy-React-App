import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Panel, FormControl, FormGroup, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';
import helpers from './utils/helpers';

export default class CreateOuting extends Component {
  constructor(props) {
      super(props);
      // set initial state
      // location and activity are passed in as props and used
      // to populate corresponding form elements, but date must
      // be selected by user with datepicker
      this.state = {
        visible : false,
        date: {}
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
 
  handleChange(event){
    event.preventDefault()
    // console.log("Date change event fired");
    // console.log("Datepicker value: " + event.target.value);

    this.setState({date: event.target.value})
    console.log("State: ")
    console.log(this.state)
  }

  handleSubmit(event) {
    console.log("userId: " + localStorage.getItem('userId'));
    // Create an object that captures the props and the
    // value of state that was set in the handleChange event
    let formData = {
      location: this.props.selectedPlace.name,
      activity: this.props.activity,
      date: this.state.date
    };

    // Invoke helper function to post to database
    helpers.createOuting(formData);

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
                    onChange={this.handleChange.bind(this)}
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