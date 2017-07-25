import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {  Grid, Row, Col} from 'react-bootstrap';
import { Switch,Link, Route, BrowserRouter as Router } from 'react-router-dom';
import loadGoogleMapsAPI from 'load-google-maps-api';
// import './styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';

// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();

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


export default class App extends Component {
    constructor(props) {
        super(props);
        this.setParent = this.setParent.bind(this);
        this.state = {
            lat: null,
            lng: null,
            activity: "",
            searchRadius: null,
            apiLoaded: false,
            results: [],
            authenticated: false // auth
        }
    }

    componentDidMount() {
    /* Loads the Google Maps API with Places library into this component */
        this.toggleAuthenticateStatus(), // auth 
        loadGoogleMapsAPI({
            key: 'AIzaSyCUX8t_7WDEjYpCH34o4MPRPREZi_HpOzo',
            libraries: ["places"]
        })
        .then((googleAPI) => {
              this.setState({apiLoaded: true, googleAPI: googleAPI});
              }).catch((err) => {
              console.error(err)
        })
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
                {...props}
                />  
            )
        }
        
        return ( 
          <Router>
            <div className = "App">
              <Header />
                <Grid>
                <Row className = "show-grid">
                    <Banner />

                    <SearchForm googleAPI={this.state.googleAPI} setParent={this.setParent}/>
                  <Switch>
                    <Route path="/Results" render={ResultsPageProps}/>
                    <Route path="/" component ={Featured}/>
                  </Switch>
                </Row> 
                </Grid>
              <Footer />
            </div>
          </Router>
        );
    }

}
