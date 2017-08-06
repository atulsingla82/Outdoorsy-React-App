//Include React
import React, {Component} from "react";
import helpers from './utils/helpers';

var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();




export default class Mailing extends Component {
	constructor(props){
		super(props);
		// Set initial state for guests, which will be entered in a form by the user.
    // Activity, location and date are passed in as props.
		this.state = {
			visible: false,
			guests: "",
      mailText: ""
		}
		this.OpenModal = this.openModal.bind(this);
		this.CloseModal = this.closeModal.bind(this);
		this.handleChange =this.handleChange.bind(this);
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

    this.setState({guests: event.target.value})
    console.log("guests: ")
    console.log(this.state)
  }

  handleSubmit(event) {

    //Create an object that captures the props and the
    //value of state that was set in the handleChange event
    let formData = {
      location: this.props.location,
      activity: this.props.activity,
      date: this.props.date,
      guests: this.state.guests
    };

    // Invoke helper function to send mails
    helpers.sendMail(formData);
  }

  render() {
    return (
      <section>
        <input 
        	type="button" 
        	value="Invite Guests" 
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
                    value={this.props.date}
                    // onChange={this.handleChange.bind(this)}
    	            />
                  <br />
                  <textarea
                    name="guests"
                    onChange={this.handleChange.bind(this)}
                    placeholder = "Enter email address (or multiple addresses separated by commas"
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