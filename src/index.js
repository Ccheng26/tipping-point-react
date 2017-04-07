import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

ReactDOM.render((
  <Router history={ browserHistory } routes={routes}>
  </Router>
), document.getElementById('root'));

