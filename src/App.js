import React, { Component } from 'react';
import {  Grid, Row, Col} from 'react-bootstrap';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import loadGoogleMapsAPI from 'load-google-maps-api';

import Auth from './components/common/modules/Auth';
// import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import HomePage from './components/common/components/HomePage.jsx';
import LoginPage from './components/common/containers/LoginPage.jsx';
import LogoutFunction from './components/common/containers/LogoutFunction.jsx';
import SignUpPage from './components/common/containers/SignUpPage.jsx';
import DashboardPage from './components/common/components/Dashboard.jsx';


import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.setParent = this.setParent.bind(this);
    this.state = {
      authenticated: false,
      lat: null,
      lng: null,
      activity: "",
      searchRadius: null,
      apiLoaded: false,
      results: []
    }
  }


  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus(); // auth 

  //   /* Loads the Google Maps API with Places library into this component */ 
    loadGoogleMapsAPI({
      key: 'AIzaSyCUX8t_7WDEjYpCH34o4MPRPREZi_HpOzo',
      libraries: ["places"]
    })
    .then((googleAPI) => {
      this.setState({apiLoaded: true, googleAPI: googleAPI});

      }).catch((err) => {
      console.error(err)
    });
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  setParent(newLat, newLng, newActivity, newSearchRadius, newResults) {
    this.setState({
      lat: newLat, 
      lng: newLng, 
      activity: newActivity, 
      searchRadius: newSearchRadius,
      results: newResults
    });


  }

  render() {
    const ResultsPageProps = (props) => {
      return (
        <Results
        places={this.state.results}
        activity={this.state.activity}
        googleAPI={this.state.googleAPI}
        queryPlaces={this.queryPlaces}
        authenticated={this.state.authenticated}
        {...props}
        /> 
      )
    }
      return ( 
       <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div className="App">
            {/*<Header />*/}
           {/* NEW HEADER W/ AUTHENTICATION TOGGLE DISPLAY */}
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">Outdoorsy</Link>
              </div>

                {this.state.authenticated ? (
                  <div className="top-bar-right">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/logout">Log out</Link>
                  </div>
                ) : (
                  <div className="top-bar-right">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                  </div>
                )}
            </div>

          <div>
            <PropsRoute 
              exact path="/" 
              component={HomePage} 
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <PrivateRoute 
              path="/dashboard" 
              component={DashboardPage}
            />
            <LoggedOutRoute 
              path="/login" 
              component={LoginPage} 
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}  
            />
            <LoggedOutRoute 
              path="/signup" 
              component={SignUpPage}
            />
            <Route path="/logout" component={LogoutFunction}/>
          </div>

              <Grid>
              <Row className = "show-grid">
                  
                  <SearchForm 
                    googleAPI={this.state.googleAPI} 
                    setParent={this.setParent}
                  />

                  <Footer />
                  
                  <Switch>
                    <Route path="/Results" render={ResultsPageProps}/>
                    <Route path="/" component ={Featured}/>
                  </Switch>
              
              </Row> 
              </Grid>
            
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;