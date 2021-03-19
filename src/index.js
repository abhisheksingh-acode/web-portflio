import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <React.Fragment>
       <HashRouter>
         <App />
       </HashRouter>
  </React.Fragment>,
  document.getElementById('root')
);