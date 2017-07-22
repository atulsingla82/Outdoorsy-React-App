import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import CreateOuting from './CreateOuting';
import ViewPlace from './ViewPlace';

export default class Results extends Component {

  constructor(props) {
    super(props);
    this.renderPlaces = this.renderPlaces.bind(this);
    this.queryPlaceDetails = this.queryPlaceDetails.bind(this);
    this.state = {
      detailedPlace: {},
      visible: false
    };
  }

  queryPlaceDetails(placeId) {
    const googleAPI = this.props.googleAPI;
    let service;
    var request = {
          placeId: placeId
        };
    service = new googleAPI.places.PlacesService(document.createElement('div.placeDetailsAttrib'));
    let callback = (place, status) => {
      if (status == googleAPI.places.PlacesServiceStatus.OK) {
        console.log(place);
        return place;
      }
    }
    service.getDetails(request, callback);
  }

  renderPlaces(key) {
    const selectedPlace = this.props.places[key];
    const placeId = selectedPlace.place_id;
    return (
    <div className="view-places" key={key} id={placeId} onClick={this.handleClick}>
      <Col xs={6} md={4}>
        <Thumbnail src="/images/hiking2.jpg" alt="242x200">
        <h4>{selectedPlace.name}</h4>
        Description
          <CreateOuting selectedPlace={selectedPlace} activity={this.props.activity} />
          <ViewPlace placeId={placeId} queryPlaceDetails={this.queryPlaceDetails} />
          </Thumbnail>
      </Col>
    </div>
    )
  }

 

render(){
  return (
   <div className = "panel panel-default">
      <div className = "panel-heading">
        <h3 className = "panel-title text center" > Results </h3> 
        

      <Grid>
    <Row>
      {Object.keys(this.props.places).map(this.renderPlaces)}    
    </Row>
    </Grid>

        </div> 

      </div>
  	)
  }
}
