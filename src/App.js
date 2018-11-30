import React, { Component } from 'react';
import MapContainer from './Map.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Tag
        </header>
        <MapContainer />
        <div className="menu">
        </div>
      </div>
    );
  }
}

export default App;
