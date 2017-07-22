import axios from 'axios';

export default {

	createUser(formData){
		return axios.post("/createUser", formData )
	
	}
};
// import SearchForm from '../SearchForm';

// const helpers = {
//     queryPlaces (googleAPI, lat, lng, searchRadius, activity) { 
//         let service;
//         const initialize = () => {
//           const locationCoords = {lat: lat, lng: lng};
//           const request = {
//             location: locationCoords,
//             radius: searchRadius,
//             keyword: activity
//           };    
//           service = new googleAPI.places.PlacesService(document.createElement('div.attributions'));
//           const callback = (results, status) => {
//             if (status === googleAPI.places.PlacesServiceStatus.OK) {
//               console.log(results);
//               return results;
//             }
//           }
//           return service.nearbySearch(request, callback);      
//         }
//         return initialize();
//     }
// }

// export default helpers;