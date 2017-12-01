import React, { Component } from 'react';
import './App.css';
// Must import components used in the JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';

let headFootStyle = {
  height: 50,
  padding: 10,
  margin: '15px 0',
  color: 'grey',
  fontSize: 18,
  textAlign: 'center'
};

let colors = ['#155765', '#57652A', '#AB9353', '#4D2C3D'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }

  getInitialState(){
    return {
      colors,
      code: this.genCode(colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess()]
    };
  }
  

  getNewGuess() {
    return {
      code: [null, null, null, null],
      // code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(size).fill().map(dummy => Math.floor(Math.random() * size));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.code.join() === this.state.guesses[lastGuess].code.join() ? lastGuess + 1 : 0;
  }

  //these are our event handlers
  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  
  handlePegClick = (pegIdx) => {
    //get copy of state.guesses
    let copyGuesses = [...this.state.guesses]
    
    //get copy of last guess
    let copyGuess = Object.assign({}, this.state.guesses.last());
    
    //get copy of code arrary of the last guess
    let copyCode = [...copyGuess.code]

    //change the copy of code array
    copyCode[pegIdx]=this.state.selColorIdx;

    //put copy code into copy guess
    copyGuess.code = copyCode;

    //replace last guess in guesses copy with copy of guess
    copyGuesses[copyGuesses.length -1] = copyGuess;

    //setSate with new guesses
    this.setState({
      guesses: copyGuesses
    });
  }


  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }

  handleScoreButton = () => {
    let currentGuessIdx = this.state.guesses.length - 1;
    
        // Computing the score will modify the guessed code and the
        // secret code, therefore create copies of the originals
        let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
        let secretCodeCopy = [...this.state.code];
    
        let perfect = 0, almost = 0;
    
        // First pass computes number of "perfect"
        guessCodeCopy.forEach((code, idx) => {
          if (secretCodeCopy[idx] === code) {
            perfect++;
            // ensure does not match again
            guessCodeCopy[idx] = secretCodeCopy[idx] = null;
          }
        });
    
        // Second pass computes number of "almost"
        guessCodeCopy.forEach((code, idx) => {
          if (code === null) return;
          let foundIdx = secretCodeCopy.indexOf(code);
          if (foundIdx > -1) {
            almost++;
            secretCodeCopy[foundIdx] = null;
          }
        });
    
        // State must only be updated with NEW objects/arrays
        let guessesCopy = [...this.state.guesses];
    
        // Set scores
        guessesCopy[currentGuessIdx].score.perfect = perfect;
        guessesCopy[currentGuessIdx].score.almost = almost;
    
        // Add a new guess if not a winner
        if (perfect !== 4) guessesCopy.push(this.getNewGuess());
    
        // Finally, update the state with the NEW guesses array
        this.setState({
          guesses: guessesCopy
        });

  }

  //lifecycle methods

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header style={headFootStyle}>R E A C T &nbsp;&nbsp; M A S T E R M I N D</header>
        <div className="App-game">
          <GameBoard
          handlePegClick={this.handlePegClick}
            guesses={this.state.guesses}
            colors={this.state.colors}
            selColorIdx={this.state.selColorIdx}
            handleScoreButton={this.handleScoreButton}
          />
          <div className="App-controls">
            <ColorPicker
              selColorIdx={this.state.selColorIdx}
              colors={this.state.colors}
              handleColorSelection={this.handleColorSelection}
            />
            <NewGameButton 
             handleNewGameClick={this.handleNewGameClick}
            />
            <div>{this.state.code}</div>
            <div>{this.state.guesses.code}</div>
            
          </div>
        </div>
        <footer style={headFootStyle}>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
