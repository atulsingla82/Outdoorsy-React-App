import React, { Component } from "react";
import { ButtonToolbar, Button, ButtonGroup, Well } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

// import '../styles/searchform.css';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.getLocation = this.getLocation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.queryPlaces = this.queryPlaces.bind(this);
        this.state = {
            lat: null,
            lng: null,
            activity: "",
            searchRadius: null,
            results: []
        }
  }

    componentDidUpdate() {
        this.getLocation();
    }

    getLocation() {
        const googleAPI = this.props.googleAPI;
        const input = document.getElementById('autocomplete');
        const defaultBounds = new googleAPI.LatLngBounds(
            googleAPI.LatLng(-90, -180),
            googleAPI.LatLng(90, 180));
        const options = {
            types: ['(cities)'],
            bounds: defaultBounds
        }
        const autocomplete = new googleAPI.places.Autocomplete(input, options);
        const onPlaceChanged = () => {
            const place = autocomplete.getPlace();
            const placeLat = place.geometry.location.lat();
            const placeLng = place.geometry.location.lng();
            this.setState({lat: placeLat, lng: placeLng});
        }
         autocomplete.addListener('place_changed', onPlaceChanged);
    }

    queryPlaces() { 
        const googleAPI = this.props.googleAPI;
        let service;
        const initialize = () => {
          const locationCoords = {lat: this.state.lat, lng: this.state.lng};
          const request = {
            location: locationCoords,
            radius: this.state.searchRadius,
            keyword: [this.state.activity]
          };    
          service = new googleAPI.places.PlacesService(document.createElement('div.placesAttrib'));
          let callback = (results, status) => {
            if (status == googleAPI.places.PlacesServiceStatus.OK && this.state.results.length == 0) {
              console.log(results);
              this.setState({results: results});
              let newLat = this.state.lat; 
              let newLng = this.state.lng;
              let newActivity = this.state.activity;
              let newSearchRadius = this.state.searchRadius;
              let newResults = this.state.results;
              this.props.setParent(newLat, newLng, newActivity, newSearchRadius, newResults);
            }
          }
          service.nearbySearch(request, callback);      
        }
        initialize();
    }

    /*  Grabs values from input button groups and stores them in state */
    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
        <Well bsSize = "large"
          className = "searchContainer">

         <div className="heading">
          <h3 className= "text-center"> Search </h3>
        </div> 
            {/*This is the location search bar */}
        <div>
            <input 
                id="autocomplete" 
                size={50} 
                placeholder="Start typing the name of a city or town" 
                type="text">
            </input>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className = "container-button">
                <ButtonGroup bsSize = "large">
                    <Button 
                        type="button"
                        name="activity"
                        value = "hiking"
                        onClick = { this.handleChange }>
                        Hiking 
                        </Button>
                    <Button 
                         type="button"
                        name="activity"
                        value = "mountain biking"
                        onClick = { this.handleChange }>
                        Biking 
                    </Button> 
                    <Button 
                        type="button"
                        name="activity"
                        value="camping"
                        onClick = { this.handleChange }>
                        Camping 
                    </Button> 
                    <Button 
                         type="button"
                        name="activity"
                        value="skiing"
                        onClick = { this.handleChange }>
                        Snow Sports 
                        </Button> 
                    <Button 
                         type="button"
                        name="activity"
                        value="canoeing"
                        onClick = { this.handleChange }>
                        Paddling 
                    </Button> 
                  </ButtonGroup>
            </div>
            <div>
            <ButtonGroup bsSize = "large">
                <Button
                    type="button"
                    name="searchRadius"
                    value={16094}
                    onClick = { this.handleChange }>
                    10 miles 
                 </Button> 
                <Button
                    type="button"
                    name="searchRadius"
                    value={32187}
                    onClick = { this.handleChange }> 
                    20 miles 
                </Button> 
                <Button
                    type="button"
                    name="searchRadius"
                    value={48280}
                    onClick = { this.handleChange }> 
                    30 miles 
                </Button> 
            </ButtonGroup> 
            </div>
            <br />
            <br />
            <Link to="/Results">
                <Button onClick={this.queryPlaces}>Submit</Button> 
            </Link>
           
        </form>
            </Well>
        )
    }
}
