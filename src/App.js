import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GuessRow from './components/GuessRow/GuessRow';
import ScoreButton from './components/ScoreButton/ScoreButton';
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <GuessRow />
        <GuessRow />
        <ScoreButton />
        <NewGameButton />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
