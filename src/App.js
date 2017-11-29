import React, { Component } from 'react';
import './App.css';

import ColorPicker from './components/ColorPicker/ColorPicker';
import GameBoard from './components/GameBoard/GameBoard';
import GuessRow from './components/GuessRow/GuessRow';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
