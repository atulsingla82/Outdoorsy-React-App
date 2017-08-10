import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';

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
                  {/* Here we use a map function to loop through an array in JSX */}
               {this.props.saved.map(function(results, i) {
            return (
              <p key={i}>{results.location} - {results.activity}</p>
            );
          })}
                </div> 
                 <div className="saved-right">
                    
                 </div>

           </div>

            </Row>
          </Grid>
        </div> 
      </div>
    )
  }
}
