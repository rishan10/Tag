import React, { Component } from 'react';
import MapContainer from './Map.js';
import Tag from './tag.js';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import SignIn from './Firebaseauth/SignIn.js';
import * as ROUTES from './routes.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" id="App">
        <header className="App-header">
          Geo-Tag
        </header>
        <Router>
          <div>
          <Route exact path={ROUTES.SIGNIN} component={SignIn}/>
          <Route path={ROUTES.HOME} component={Tag}/>
          </div>
        </Router>
      </div>
    );
  }

  
}

export default App;
