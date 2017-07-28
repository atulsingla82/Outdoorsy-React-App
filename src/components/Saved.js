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
            <div className="savedContainer">
                <div className="saved-left">
                  <img src='./images/Highrock.jpg' height='50%' width='50%' />
                </div> 
                 <div className="saved-right">
                    <h2>High Rock Park</h2>
                    <h3> 200 Nevada Ave, Staten Island, NY 10314, USA</h3>
                    <h3> Hiking </h3>
                    <h3> 07/31/2017</h3>
                 </div>

           </div>

            </Row>
          </Grid>
        </div> 
      </div>
    )
  }
}
