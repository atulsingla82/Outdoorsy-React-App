import React, { Component } from "react";
import { Carousel, Well } from 'react-bootstrap';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // images:[];
        };

        // this.getImages = this.getImages.bind(this);
    }
    
    componentDidMount() {
    // this.getImages();
  }

  getImages() {

  }

  // A helper method for rendering one panel for each Image
  renderImages() {
    
  }


    render() {
        return (

            <Well bsSize = "large"
            className = "featuredContainer">
            
            <Carousel>
            <Carousel.Item>
            <img width ={600}
            height ={300}
            alt=""
            src = "./images/hiking1.jpg"/>
            <Carousel.Caption >
            <h3 > First slide label </h3> 
            <p > Nulla vitae elit libero, a pharetra augue mollis interdum. </p> 
            </Carousel.Caption> 
            </Carousel.Item> 

            <Carousel.Item >
            <img width = {600}
            height = {300}
            alt = ""
            src = "./images/hiking2.jpg"/>
            <Carousel.Caption >
            <h3 > Second slide label </h3>
             <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> 
             </Carousel.Caption> 
             </Carousel.Item> 

             <Carousel.Item >
            <img width = {600}
            height = {300}
            alt = ""
            src = "./images/hiking3.jpg"/>
            <Carousel.Caption >
            <h3> Third slide label </h3> 
            <p > Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> 
            </Carousel.Caption> 
            </Carousel.Item> 


            </Carousel>
            </Well>




         )


    }

}

export default Featured
