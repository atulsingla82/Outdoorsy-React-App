import React, { Component } from 'react';
var style = {
    backgroundColor: "grey",
    color:"white",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

class Footer extends Component {

    render() {
        return ( 
            <footer className="footer" style={style}>
                <p>Proudly built using React.js</p>
            </footer>    
        );
    }
}
export default Footer;