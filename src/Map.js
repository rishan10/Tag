import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';


export class MapContainer extends Component {
  render() {
    return (
      <Map className="Map"
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEzajaiAQbefAv9ZT_m6NKJQibsEqzBoc'
})(MapContainer);