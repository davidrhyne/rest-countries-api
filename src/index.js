import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom"
import './index.css';
import App from './App';
import { ThemeValueProvider } from './context/ThemeValueContext'


ReactDOM.render(
  <HashRouter>
    <ThemeValueProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeValueProvider>
  </HashRouter>,
  document.getElementById('root')
);