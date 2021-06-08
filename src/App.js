import React from 'react'
import {Switch, Route } from "react-router-dom"
import './App.css';
import * as ROUTES from './constants/routes';
import { Home } from './pages'
import { Featured } from './pages'
import { CountryDataContextProvider } from './context/countryDataContext'

import {  ThemeProvider } from 'styled-components'
// import { ThemeValueProvider } from './context/ThemeValueContext'
import { useTheme } from './context/ThemeValueContext'


function App() {

  const isDarkTheme = useTheme()
  console.log('isDarkTheme = ', isDarkTheme)

  const theme = {
    background: "white",
    color: "yellow"
  }

  const darkTheme = {
    background: "darkgrey",
    color: "red"
  }

  return (

    <CountryDataContextProvider>    
      {/* <ThemeValueProvider> */}
        <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
          <Switch>
              <Route exact path={ROUTES.HOME}>
                  <Home />
              </Route>
              <Route exact path={`${ROUTES.FEATURED}/:countryCode`}>
                  <Featured /> 
              </Route>          

          </Switch>   
        </ThemeProvider>
      {/* </ThemeValueProvider>       */}
    </CountryDataContextProvider>

  );
}

export default App;
