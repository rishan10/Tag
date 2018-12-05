import React, { Component } from 'react';
import MapContainer from './Map.js';
import './tag.css';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {isIt: false,
                  start: false,
                  shouldRestart: false,
                  timer: ""};
    this.makeIt = this.makeIt.bind(this)
    this.restart = this.restart.bind(this)
    this.start = this.start.bind(this)
  }

  makeIt() {
    this.setState({isIt: true});
  }

  signOut () {
    window.location.href = '/'
  }

  restart() {
    this.setState({isIt: false,
                   start: false,
                   shouldRestart: false})
  }

  start() {
    this.setState({start: true})
    var time = 600;
    var _this = this

    var clock = setInterval(function(){
      time = time - 1;
      var minutes = Math.floor(time / 60)
      var sec = time - 60 * minutes;
      var sec_string = "";
      if (sec < 10) {
        sec_string = "0" + sec.toString()
      } else {
        sec_string = sec.toString()
      }

      var time_string = minutes.toString() + ":" + sec_string

      if (time >= 0) {
        _this.setState({timer:time_string})
      } else {
        _this.setState({start: false, shouldRestart:true})
        clearInterval(clock)
      }
    }, 1000);
  }

  render() {
    return (
        <div>
          <p className="signout" onClick={this.signOut}>Sign Out</p>
          <p className="clock" style={{visibility: this.state.start || this.state.shouldRestart ?  'visible' : 'hidden' }}>{this.state.timer}</p>
          <MapContainer />
          <div className="menu">
            <div className="notIt" style={{visibility: !this.state.isIt && !this.state.shouldRestart ? 'visible' : 'hidden'}}>
              <h2 className="title titleNI">You're Not It</h2>
              <div className="tag-button" onClick={this.makeIt}>Push if Tagged</div>
            </div>
            <div className="it" style={{visibility: this.state.isIt && !this.state.shouldRestart ? 'visible' : 'hidden' }}>
              <h2 className="title titleI">You're It</h2>
            </div>
            <p className="gameover" style={{visibility: this.state.shouldRestart ? 'visible' : 'hidden' }}>Game Over</p>
            <p className="start-restart" onClick={this.restart} style={{visibility: this.state.shouldRestart ? 'visible' : 'hidden' }}>restart</p>
            <p className="start-restart" onClick={this.start} style={{visibility: !this.state.start && !this.state.shouldRestart ?  'visible' : 'hidden' }}>start</p>
          </div>
        </div>
    );
  }

  
}

export default Tag;
