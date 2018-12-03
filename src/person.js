// import React from 'react';

// export class Person extends React.Component { 
// 	constructor() {
//     	super();
//     	this.state = {
//         	myLatLng: {
//             	lat: 49.2827,
//             	lng: -123.1207
//         	}
//     	};
//   	}
//   	getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 this.setState({
//                         myLatLng: {
//                             lat: position.coords.latitude,
//                             lng: position.coords.longitude
//                         }
//                     }
//                 );
//             })
//         } else {
//             //browser doesn't support geolocation, set as vancouver
//             this.setState({
//                     myLatLng: {
//                         lat: 49.8527,
//                         lng: -123.1207
//                     }
//                 }
//             );
//         }
//     }


// }
