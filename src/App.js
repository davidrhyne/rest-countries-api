import React from 'react'
import {Switch, Route } from "react-router-dom"
import './App.css';
import * as ROUTES from './constants/routes';
import { Home } from './pages'
import { Featured } from './pages'

function App() {



  return (

    <div>    
      <Switch>
          <Route exact path={ROUTES.HOME}>
              <Home />
          </Route>
          {/* <Route exact path={ROUTES.FEATURED}>
              <Featured /> 
          </Route> */}
          <Route exact path={`${ROUTES.FEATURED}/:countryCode`}>
              <Featured /> 
          </Route>          

      </Switch>   
    </div>

  );
}

export default App;
