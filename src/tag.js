import React, { Component } from 'react';
import MapContainer from './Map.js';
import './tag.css';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {isIt: false};
    this.makeIt = this.makeIt.bind(this)
  }

  makeIt() {
    this.setState({isIt: true});
  }

  render() {
    return (
        <div>
          <MapContainer />
          <div className="menu">
            <div className="notIt" style={{visibility: this.state.isIt ? 'hidden' : 'visible'}}>
              <h2 className="title titleNI">You're Not It</h2>
              <div className="tag-button" onClick={this.makeIt}>Push if Tagged</div>
            </div>
            <div className="it" style={{visibility: this.state.isIt ? 'visible' : 'hidden' }}>
              <h2 className="title titleI">You're It</h2>
            </div>
          </div>
        </div>
    );
  }

  
}

export default Tag;
