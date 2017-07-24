 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

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
        	value="Login" 
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
            <h1>Login</h1>
            <form>
            	<br/>
	            <br/>
	            <lable>Email</lable>
	            <input
	            	name="email"
	            	type="text"
	            	width="80%"
	            />
	            <br/>
	            <lable>Password</lable>
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
            <br/>  <br/>
            {/*route to Register modal popup and form*/}
            <h4>Need an account? </h4>
            <a 
              href="">
              Sign up here.</a>
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