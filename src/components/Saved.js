import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';
import CreateOuting from './CreateOuting';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';



export default class Saved extends Component {

  constructor(props) {
    super(props);
    
  }

  


  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center"> Saved Adventures </h3> 
          <Grid>
            <Row>
                 
            </Row>
          </Grid>
        </div> 
      </div>
    )
  }
}
