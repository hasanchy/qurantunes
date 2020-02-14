import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from './ReactAudioPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactAudioPlayer/>
        </header>
      </div>
    );
  }
}

export default App;
