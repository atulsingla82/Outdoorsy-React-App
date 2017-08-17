import React, { Component } from "react";
import { Carousel, Well } from 'react-bootstrap';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    

    render() {
        return (

            <Well bsSize = "large"
            className = "featuredContainer">
            
            <Carousel>
            <Carousel.Item>
            <img width ={1200}
            
            alt=""
            src = "./images/canyon.jpg"/>
            <Carousel.Caption >
            <h3>  Canyonlands National Park,Utah</h3> 
            <p > 337,598 acres of colorful canyons, mesas, buttes, fins, arches, and spires in the heart of southeast Utah's high desert. </p> 

            </Carousel.Caption> 
            </Carousel.Item> 

            <Carousel.Item >
            <img width = {1200}
           
            alt = ""
            src = "./images/yosemite.jpg"/>
            <Carousel.Caption >
            <h3 >Yosemite Grand Traverse</h3>
             <p > A nearly 60-mile hiking traverse through the heart of Yosemite </p> 

             </Carousel.Caption> 
             </Carousel.Item> 

             <Carousel.Item >
            <img width = {1200}
            
            alt = ""
            src = "./images/lakelouise.jpg"/>
            <Carousel.Caption >
            <h3> Lake Louise, Banff, Canada</h3> 
            <p > Paddle through the iridescent lakes, climb mountains, or just lie back in the grass and enjoy the sunshine and pure mountain air. </p> 
            </Carousel.Caption> 
            </Carousel.Item> 

            <Carousel.Item >
            <img width = {1200}
            
            alt = ""
            src = "./images/peru.jpg"/>
            <Carousel.Caption >
            <h3> Cusco , Peru</h3> 
            <p > One of the top 5 treks in the world.The final destination of the trail just cannot be beaten: Machu Picchu, the mysterious "Lost City of the Incas". </p> 
            </Carousel.Caption> 
            </Carousel.Item> 


            </Carousel>
            </Well>




         )


    }

}

export default Featured
