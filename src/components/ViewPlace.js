import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class ViewPlace extends Component {
  constructor(props) {
      super(props);
      this.queryPlaceDetails = this.queryPlaceDetails.bind(this);
      this.state = {
        visible : false,
        beforeQuery: true,
        detailedPlace: {},
        photoUrl: [],
        photoAttrib: ""
      }
  }

  componentDidUpdate() {
    if (this.state.beforeQuery === true) {
      this.queryPlaceDetails(this.props.placeId); 
    }
  }

  openModal() {
      this.setState({
        visible: true,
      });
  }

  closeModal() {
      this.setState({
        visible: false
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
          detailedPlace: place,
          beforeQuery: false
        })
        if (this.state.detailedPlace) {
          const photos = this.state.detailedPlace.photos[0];
          const getPhoto = photos.getUrl({"maxWidth": 500});
          const attrib = photos.html_attributions[0];
          console.log(attrib);
          this.setState({
            photoUrl: getPhoto,
            photoAttrib: attrib
          })  
        }
      }
    }
    service.getDetails(request, callback);
  }

  render() {
    const place = this.state.detailedPlace;
    const photoAttrib = this.state.photoAttrib;
    return (
      <section>
        <input 
          type="button" 
          value="View"
          id={this.props.placeId} 
          onClick={() => this.openModal()} 
        />
        <Modal 
          visible={this.state.visible} 
          width="60%" 
          height="60%" 
          effect="fadeInUp" 
          onClickAway={() => this.closeModal()}>
          <div>
            <h1>{place.name}</h1>
            <h4>{place.formatted_address}</h4>
            <img src={this.state.photoUrl} width="90%"/><br />
            
            <div>
              <a href={place.url} target="_blank">More Details From Google</a> | 
              <a href={place.website} target="_blank"> Official Website</a>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}