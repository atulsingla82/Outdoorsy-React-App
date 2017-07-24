 // Include React
import React, { Component } from 'react';
import { Redirect,Switch,Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';

import Modal from 'react-awesome-modal';
import Register from './Register.js';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible : false,
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
 
  render() {
    return (
      <section
      	align="left"
      >
        <input 
        	type="button" 
        	value="Login / Sign up" 
        	onClick={() => this.openModal()} 
        />
        <Modal 
        	visible={this.state.visible} 
        	width="60%" 
        	height="60%" 
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <br/>
            <h1>Login</h1>
            <form>
            	<br/>
	            <br/>
	            <label>Email</label>
	            <input
	            	name="email"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <label>Password</label>
	            <input
	            	name="password"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <input
	            	type="submit"
	            	value="submit"
	            />
	          </form>
            <br/>  
            <br/>
            {/*route to Register modal popup and form*/}
            <h4>Dont have an account ?</h4>


             <Register />
         

              <br/>
              <br/>
              <a 
              href="javascript:void(0);" 
              onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
      </section>
  	);
  }
}