import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from './ReactAudioPlayer';
import AudioPlayer from './components/AudioPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactAudioPlayer/>
          <AudioPlayer />
        </header>
      </div>
    );
  }
}

export default App;
