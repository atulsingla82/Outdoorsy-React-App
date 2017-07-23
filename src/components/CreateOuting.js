 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class CreateOuting extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible : false,
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
  }

  render() {
    return (
      <section
      	align="center"
      >
        <input 
        	type="button" 
        	value="Plan an Outing" 
        	onClick={() => this.openModal()} 
        />
        <Modal 
        	visible={this.state.visible} 
        	width="40%" 
        	height="60%" 
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <br/>
            <h1>Let's Go!</h1>
            <form onSubmit={this.handleSubmit}>
            	<br/>
	            <br/>
	            <label>Location: </label><br />
	            <input
	            	name="location"
                readOnly="readOnly"
                value={this.props.selectedPlace.name}
                placeholder={this.props.selectedPlace.name}
	            	type="text"
	            	width="75px"
	            />
	            <br/>
              <label>Activity: </label><br />
              <input
                name="activity"
                readOnly="readOnly"
                value={this.props.activity}
                placeholder={this.props.activity}
                type="text"
                width="75px"
              />
              <br />
	            <label>Date: </label><br />
	            <input
	            	name="date"
	            	type="date"
	            	width="75px"
	            />
              <br />
	            <input
	            	type="submit"
	            	value="submit"
	            />
	          </form>
              <a 
              href="javascript:void(0);" 
              onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
  	);
  }
}