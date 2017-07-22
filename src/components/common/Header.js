import React, { Component } from 'react';
import { Nav, NavItem, Navbar} from 'react-bootstrap';
import Login from './Login.js';
import Register from './Register.js';

export default class Header extends Component {
constructor(props) {
    super(props);
    this.state = {
        visible : false
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
      <Navbar inverse collapseOnSelect >
                    
            <Navbar.Header>
              <Navbar.Brand>
                <a href = "/"> Outdoorsy </a> 
              </Navbar.Brand> 
              <Navbar.Toggle/>
            </Navbar.Header> 

          <Navbar.Collapse >
            <Nav pullRight>
              <section>
                <Login />
                <Register />
              </section>
            </Nav> 
          </Navbar.Collapse> 

      </Navbar> 
    )
  }
}
