import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import CreateOuting from './CreateOuting';
import ViewPlace from './ViewPlace';

export default class Results extends Component {

  constructor(props) {
    super(props);
    this.renderPlaces = this.renderPlaces.bind(this);
  }

  renderPlaces(key) {
    const selectedPlace = this.props.places[key];
    const placeId = selectedPlace.place_id;

    return (
    <div className="view-places" key={key} id={placeId} onClick={this.handleClick}>
      <Col xs={6} md={4}>
        <Thumbnail>
        <h4>{selectedPlace.name}</h4>
          <CreateOuting selectedPlace={selectedPlace} activity={this.props.activity} />
          <ViewPlace placeId={placeId} googleAPI={this.props.googleAPI}/>
        </Thumbnail>
      </Col>
    </div>
    )
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">Search</h3> 
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
