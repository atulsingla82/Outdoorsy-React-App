import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import Banner from '../Banner';
import Featured from "../../Featured";

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
      <Banner />
        <CardTitle 
          title="Outdoorsy" 
          subtitle="This is the home page." 
        />
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }} >
              Welcome! You are logged in.
            </CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: 'green' }}>
              You are not logged in.
            </CardText>
          )}
      </Card>
    )
  }
};

export default HomePage;
