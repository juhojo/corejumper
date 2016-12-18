require("!style-loader!css-loader!sass-loader!../styles/main.scss");
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
