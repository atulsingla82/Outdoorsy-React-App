import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image} from 'react-bootstrap';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers";

export default class Saved extends Component {

  constructor(props) {
    super(props);
    this.state = {

      saved:[]
    }

}

componentDidMount() {
       helpers.viewOuting(this.state.saved).then(function (response) {
            console.log(response);
            if (response !== this.state.saved) {
                console.log("Saved", response.data);
                this.setState({saved: response.data});
            }
        }.bind(this));
  
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
               {this.state.saved.map(function(results, i) {
            return (
              <p key={results._id}>{results.location} - {results.activity}- {results.date}</p>
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
