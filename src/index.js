import React from 'react';
import App from './pages/App/App';
import ReactDOM from 'react-dom';
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
