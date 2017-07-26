import React, { Component } from 'react';
import { Button,Nav, NavItem, Navbar} from 'react-bootstrap';
import Login from './Login.js';

// import Register from './Register.js';
// import Register from '../Register.js';
import { Switch, Redirect, Link, Route, BrowserRouter as Router } from 'react-router-dom';


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
      <Router>
      <Navbar inverse collapseOnSelect >
                    
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/"> Outdoorsy </Link> 
              </Navbar.Brand> 
              <Navbar.Toggle/>
            </Navbar.Header> 

          <Navbar.Collapse >
            <Nav pullRight>
              <section>

              <Login />

              </section>
            </Nav> 
          </Navbar.Collapse> 

      </Navbar> 
      </Router>
    )
  }
}
