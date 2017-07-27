import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText><p>Already have an account?</p> <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;


// COMBINED TUTORIAL + CLAUDE'S ROUTES 
// ===================================
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Card, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

// export default class SignUpForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible : false,
//       firstname: "",
//       lastname: "",
//       emailaddress: "",
//       password: ""
//     }
//   }
//   handleChange(event){
//     console.log(event.target);
//     // this.setState({firstname: event.target.value, lastname: event.target.value, 
//     //   emailaddress: event.target.value, password: event.target.value})
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//   handleSubmit(event){
//     event.preventDefault();
//     console.log("The event is")
//     console.log(event);
//     console.log("The state is")
//     console.log(this.state);
//     console.log("executing createUser")
//     helpers.createUser(this.state);
//   }

//  render() {
//   <Card className="container">
//     <form onSubmit = {this.handleSubmit.bind(this)}>
//     {/* <form action="/" onSubmit={onSubmit}>*/}
//       <h2 className="card-heading">Sign Up</h2>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="First Name"
//           name="firstname"
//           onChange={this.handleChange.bind(this)}
//           {/*
//           type="text"
//           onChange={onChange}
//           value={user.name}
//           */}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Last Name"
//           name="lastname"

//           onChange={this.handleChange.bind(this)}
//           {/*
//           type="text"
//           onChange={onChange}
//           value={user.name}
//           */}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Email"
//           name="email"
//           onChange={this.handleChange.bind(this)}
//           {/*
//           type="text"
//           onChange={onChange}
//           value={user.email}
//           */}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Password"
//           type="password"
//           name="password"
//           onChange={this.handleChange.bind(this)}
//           {/*
//           type="text"
//           onChange={onChange}
//           value={user.password}
//           */}
//         />
//       </div>

//       <div className="button-line">
//         <RaisedButton 
//           type="submit" 
//           label="Create New Account" 
//           primary />
//       </div>

//       <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
//     </form>
//   </Card>
// }


