import React, { Component } from 'react';
import { Grid, Row,Thumbnail,Button,Col,Image,Glyphicon} from 'react-bootstrap';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers";

//BEGIN added by Claude 08/20/2017

import Moment from 'react-moment';
import 'moment-timezone';
//END added by Claude 08/20/2017

export default class Saved extends Component {

  constructor(props) {
    super(props);
    this.state = {

      saved:[]
    }
this.deleteSaved = this.deleteSaved.bind(this);
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

deleteSaved(id){
    
    helpers.deleteOuting(id).then(this.state.saved);
           
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
                <hr />
                  {/* Here we use a map function to loop through an array in JSX */}
                  {this.state.saved.map(function(results, i) {
                    return (
                    <p key={results._id}>{results.location}{results.activity} <Moment format="MM/DD/YYYY">{results.date}</Moment> 
              
                      <Glyphicon key={results._id} 
                        style={styles.deleteStyle} 
                        onClick={() => this.deleteSaved(this.state.results._id)} 
                        glyph="trash"/> 

                    </p>
                 
             
            );
          })}
              
                </div> 
                 
           </div>

            </Row>
          </Grid>
        </div> 
      </div>
    )
  }
}

const styles = {
 
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 10,
    color: "green"
  }
};
