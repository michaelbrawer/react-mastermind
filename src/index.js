import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/App/App';
import './index.css';

Array.prototype.last = function(){
  return this[this.length -1];
}

ReactDOM.render(
  <Router>
    <Route render={(props) => 
      <App{...props} />
    }
  />
  </Router>,
  document.getElementById('root')
);
