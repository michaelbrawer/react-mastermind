import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

Array.prototype.last = function(){
  return this[this.length -1];
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
