import axios from 'axios';

export default {

	createUser(formData){
		console.log("createUser has been executed")
		console.log(formData);
		return axios.post("/createUser", formData)
	
	},

	createOuting(formData){
		return axios.post("/createOuting", formData)
	},

	// viewOuting does not take in an argument.  The route
	// in controller file will obtain the userId from node
	// local storage on the server side.
	viewOuting(){
		return axios.get("/viewOuting")
	},
	
	sendMail(formData) {
		return axios.get("/sendMail", formData)
	}

};
