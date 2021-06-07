import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
