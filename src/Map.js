import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';
//import { Person } from './person.js';


export class MapContainer extends Component {
  
  constructor(){
    super();
    this.state = {
          myLatLng: {
              lat: 49.8527,
              lng: -123.1207
          }
    };
    //this.p = new Person("123")
  }
  getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                        myLatLng: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }
                );
            })
        } else {
            //browser doesn't support geolocation, set as vancouver
            this.setState({
                    myLatLng: {
                        lat: 49.8527,
                        lng: -123.1207
                    }
                }
            );
        }
    }

  render() {
    
    return (
      <Map className="Map"
        google={this.props.google}
        zoom={14}
        center={this.state.myLatLng }
      >

      <Marker 
        position= { this.state.myLatLng }  name={'Your Position'}/>
      </Map>
    );
  }

  componentDidMount() {
    this.getLocation()
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEzajaiAQbefAv9ZT_m6NKJQibsEqzBoc'
})(MapContainer);