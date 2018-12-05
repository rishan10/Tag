import React, { Component } from 'react';
import { google, Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
const preObject = document.getElementById('object');
const dbRefObject = firebase.database().ref().child('users');
var jsonObj = null
dbRefObject.on('value', data => {
    jsonObj = data.val()
    //console.log(jsonObj)
    //console.log(preObject.innerText = JSON.stringify(data.val())) //gives back user data in JSON format
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
  
  constructor(props){
    
    super(props);
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
    this.locations = {}
    this.locations[uid] = {latitude:this.state.myLatLng.lat, longitude:this.state.myLatLng.lng};
  }
  errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            } else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
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
        }  else {
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
    getDataFromDatabase() {
      if (jsonObj != null) {
        for (var key in jsonObj) {
          var userinfo = jsonObj[key]
          this.locations[key] = jsonObj[key].location;
          
        }
      }
    }
    render() {
      var ar = []
      for (var key in this.locations) {
        if (this.locations[key] != {latitude:0, longitude:0}) {
          ar.push({uid:key, locations:this.locations[key]})
        }
      }
      console.log(ar)
      let markers = ar.map(dealer => (
      <Marker key = {dealer.uid}
            name = {dealer.uid}
            position={{
              lat: dealer.locations.latitude,
              lng: dealer.locations.longitude,
            }}
    
      />
    ));
    console.log(markers)

      // var j = "";
      // for (var item in ar){
      //     var j += "<Marker ref={item} name={'Enemy'} position={{ lat: item.latitude, lng: item.longitude }}/>\n";
      // }
      return (
        <Map className="Map"
          google={this.props.google}
          zoom={20}
          center={this.state.myLatLng }
        >
        {markers}
        </Map>
        

      );
    }

    componentDidMount() {
      this.getLocation()
      this.interval = setInterval(() => this.getLocation(), 1000);
      this.interval2 = setInterval(() => this.getDataFromDatabase(), 10);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
      clearInterval(this.interval2);
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEzajaiAQbefAv9ZT_m6NKJQibsEqzBoc'
})(MapContainer);