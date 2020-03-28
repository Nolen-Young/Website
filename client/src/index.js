import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/modal.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
