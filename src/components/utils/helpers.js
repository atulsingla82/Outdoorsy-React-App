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

	// TODO - Add formData parameter after we have a way to save the UserId
	// either in state as a prop or in local storage.
	viewOuting(){
		return axios.get("/viewOuting")
	},
	sendMail(formData) {
		return axios.get("/sendMail", formData)
	}

};
