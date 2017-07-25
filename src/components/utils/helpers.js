import axios from 'axios';

export default {

	createUser(formData){
		console.log("createUser has been executed")
		console.log(formData);
		return axios.post("/createUser", formData)
	
	},

	createOuting(formData){
		return axios.post("/createOuting", formData)
	}
};
