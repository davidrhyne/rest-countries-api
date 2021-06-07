import React from 'react'
import {Switch, Route } from "react-router-dom"
import './App.css';
import * as ROUTES from './constants/routes';
import { Home } from './pages'
import { Featured } from './pages'
import { CountryDataContextProvider } from './context/countryDataContext'

function App() {



  return (

    <CountryDataContextProvider>    
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
    </CountryDataContextProvider>

  );
}

export default App;
