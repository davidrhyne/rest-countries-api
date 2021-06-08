import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import { ThemeValueProvider } from './context/ThemeValueContext'


ReactDOM.render(
  <Router>
    <ThemeValueProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeValueProvider>
  </Router>,
  document.getElementById('root')
);


