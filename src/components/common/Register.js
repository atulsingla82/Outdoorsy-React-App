 // Include React
import React, { Component } from 'react';
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';

import Modal from 'react-awesome-modal';
import Login from './Login.js';
//Helper for making AJAX calls to the database
import helpers from '../utils/helpers';
import { Redirect,Switch,Link, Route, BrowserRouter as Router } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false,
          firstname: "",
          lastname: "",
          emailaddress: "",
          password: ""
      }
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
    console.log(event.target);
    // this.setState({firstname: event.target.value, lastname: event.target.value, 
    //   emailaddress: event.target.value, password: event.target.value})
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit(event){
    event.preventDefault();

    helpers.createUser(this.state)
  }
 
  render() {
    return (
      <section>

        <input 
        	type="button" 
        	value="Click here to Sign up" 
        	onClick={() => this.openModal()} 
        />
        <Modal 
        	visible={this.state.visible} 
        	width="40%" 
        	height="60%" 
        	effect="fadeInLeft" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <br/>
            <h1>Register</h1>
            <form onSubmit = {this.handleSubmit.bind(this)}>
              <br/>
              <label>First Name:</label>
              <input
                name="firstname"
                type="text"
                onChange={this.handleChange.bind(this)}
                // width="80%"
              />
              <br/>
              <label>Last Name:</label>
              <input
                name="lastname"
                type="text"
                onChange={this.handleChange.bind(this)}
                // width="80%"
              />
              <br/>
              <label>Email</label>
              <input
                name="emailaddress"
                type="text"
                onChange={this.handleChange.bind(this)}

                // width="80%"
              />
              <br/>
              <label>Password</label>
              <input
                name="password"
                type="text"
                onChange={this.handleChange.bind(this)}
                
                // width="80%"
              />
              <br/>
              <input
                type="submit"
                className="button"
                //value="submit"
              />
            </form>
            
              <br/>
              
              {/*route to Login modal popup and sign in*/}
              
                <h4>Have an account?</h4>
            

         <Link to="/Login"
              href="javascript:void(0);" 
              onClick={() => this.closeModal()}>Click here to Login</Link>
            
        

              <br/><br/>
              <a 
              href="javascript:void(0);" 
              onClick={() => this.closeModal()}>Close</a>
              
          </div>
        </Modal>
      </section>
  	);
  }
}


