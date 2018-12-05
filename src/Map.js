import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';
import './Map.css';
import { Person } from './person.js';

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDpcllNutF9qbJ0mp91aEZSPHOjAtLJoAw",
    authDomain: "tag-app-3ea59.firebaseapp.com",
    databaseURL: "https://tag-app-3ea59.firebaseio.com",
    projectId: "tag-app-3ea59",
    storageBucket: "tag-app-3ea59.appspot.com",
    messagingSenderId: "501192940886"
  };
var database = firebase.initializeApp(config).database();
var userRefs = database.ref("users") 
var currentUser = null
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    currentUser = user
    console.log(currentUser.displayName + " is currently logged in!")
  } else {
    // No user is signed in.
    currentUser = null
  }
});




function putData(location, uid, username) {
    var child = userRefs.child(uid);
    var ref = child.set({username:username, location:location}, function() {
          console.log("Location added");
          }).catch(function(error) {
        console.log(error);
        });
    return ref
}

export class MapContainer extends Component {
  
  constructor(person){
    
    super();
    this.state = {
          myLatLng: {
              lat: 0,
              lng: 0
          }
    };


    var username = localStorage.getItem('username')
    var uid = localStorage.getItem("uid")
    this.uid = uid
    this.username = username
    console.log("username: " + username)
    console.log("uid: " + uid)

    // p is a place holder, we will pass the current user into the constructor once we
    // integrate auth with the normal app
    this.currentUser = person
  }

  getLocation() {
        putData({latitude: this.state.myLatLng.lat , longitude:this.state.myLatLng.lng}, this.uid, this.username)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                //updates firebase
                var that = this;
                firebase.database().ref('users/' + that.uid + '/location').once('value').then(function(snapshot){
                  console.log(snapshot.val()) //snapshot.val() gives you longitude and latitude
                  that.setState({
                    myLatLng: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                  });
                });
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
      this.interval = setInterval(() => this.getLocation(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEzajaiAQbefAv9ZT_m6NKJQibsEqzBoc'
})(MapContainer);