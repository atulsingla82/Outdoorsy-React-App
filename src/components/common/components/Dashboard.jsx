import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Saved from '../../Saved';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
     
      
    />

    {secretData && <CardText style={{ fontSize: '30px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br /></CardText>}

  
  {/*Saved adventures component here with prop being passed from here (user.id) 
  */
  console.log("test")
  }
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;

