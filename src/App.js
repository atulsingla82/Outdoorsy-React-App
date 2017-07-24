import React, { Component } from 'react';
import {  Grid, Row, Col} from 'react-bootstrap';
import { Switch,Link, Route, BrowserRouter as Router } from 'react-router-dom';
import loadGoogleMapsAPI from 'load-google-maps-api';
// import './styles/App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Banner from './components/common/Banner';
import Featured from './components/Featured';

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
            results: []
        }
    }

    componentDidMount() {
    /* Loads the Google Maps API with Places library into this component */    
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

    setParent(newResults) {
        this.setState({
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
