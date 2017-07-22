 // Include React
import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class ViewPlace extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible : false,
        detailedPlace: {}
      }
  }

  componentDidUpdate() {
    if (this.state.detailedPlace = {}) {
      this.props.queryPlaceDetails(this.props.placeId);
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
 

  render() {
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
        	width="60%" 
        	height="80%" 
        	effect="fadeInUp" 
        	onClickAway={() => this.closeModal()}>
          <div>
            <h1>Place Name</h1>

          </div>
        </Modal>
      </section>
  	);
  }
}