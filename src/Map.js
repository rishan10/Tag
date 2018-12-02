import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';


export class MapContainer extends Component {

render() {
    return (
      <Map className="Map"
        google={this.props.google}
        zoom={20}
        initialCenter={{
         lat: 34.068840, 
         lng: -118.442849  
        }}
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEzajaiAQbefAv9ZT_m6NKJQibsEqzBoc'
})(MapContainer);