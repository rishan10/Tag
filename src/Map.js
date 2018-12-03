import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';
import './Map.css';
import { Person } from './person.js';


export class MapContainer extends Component {
  
  constructor(){
    
    super();
    this.state = {
          myLatLng: {
              lat: 0,
              lng: 0
          }
    };
    // p is a place holder, we will pass the current user into the constructor once we
    // integrate auth with the normal app
    var p = new Person("ankith", "123", "audf") 
    this.currentUser = p
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
            //browser doesn't support geolocation, set as empty
            window.alert("If you don't enable geolocation, our app won't work")
            this.setState({
                    myLatLng: {
                        lat: 0,
                        lng: 0
                    }
                }
            );
        }
    }

  render() {
    
    return (
      <Map className="Map"
        google={this.props.google}
        zoom={20}
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