 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class ViewPlace extends Component {
  constructor(props) {
      super(props);
      this.queryPlaceDetails = this.queryPlaceDetails.bind(this);
      this.state = {
        visible : false,
        beforeQuery: true,
        detailedPlace: {},
        photoUrls: []
      }
  }

  componentDidUpdate() {
    if (this.state.beforeQuery === true) {
      this.queryPlaceDetails(this.props.placeId);
      this.setState({
        detailedPlace: this.state.detailedPlace,
        beforeQuery: false
      })
    }
    if (this.state.detailedPlace !== {} && this.state.beforeQuery === false) {
      console.log(this.state.detailedPlace.photos[0]);
      /*TODO: grab and store data from arrays in the detailedPlace object for rendering */ 
    }
  }

  openModal() {
      this.setState({
        visible : true,
      });
  }

  closeModal() {
      this.setState({
        visible : false
      });
  }
 
  queryPlaceDetails(placeId) {
    const googleAPI = this.props.googleAPI;
    let service;
    let place;
    var request = {
          placeId: placeId
        };
    service = new googleAPI.places.PlacesService(document.createElement('div.placeDetailsAttrib'));
    let callback = (place, status) => {
      if (status == googleAPI.places.PlacesServiceStatus.OK) {
        console.log(place);
        this.setState({
          detailedPlace: place
        })
      }
    }
    service.getDetails(request, callback);
  }

  render() {
    const place = this.state.detailedPlace;
    return (
      <section align="left">
        <input 
          type="button" 
          value="More Details"
          id={this.props.placeId} 
          onClick={() => this.openModal()} 
        />
        <Modal 
          visible={this.state.visible} 
          width="80%" 
          height="90%" 
          effect="fadeInUp" 
          onClickAway={() => this.closeModal()}>
          <div>
            <h1>{place.name}</h1>
            <h4>{place.formatted_address}</h4>
            
          </div>
        </Modal>
      </section>
    );
  }
}