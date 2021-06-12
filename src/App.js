import React from 'react'
import {Switch, Route } from "react-router-dom"
import './App.css';
import * as ROUTES from './constants/routes';
import { Home } from './pages'
import { Featured } from './pages'
import { CountryDataContextProvider } from './context/countryDataContext'
import {  ThemeProvider, createGlobalStyle } from 'styled-components'
import { useTheme } from './context/ThemeValueContext'
import {THEME} from './constants/themes'

function App() {

  const isDarkTheme = useTheme()
  // console.log('isDarkTheme = ', isDarkTheme)
  // console.log('THEME = ', THEME.LIGHT)

  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Nunito Sans', sans-serif;
      font-size: .875rem;
      font-weight: 600;
      box-sizing: border-box;
      margin: 0 auto;
      background: black;
  }
`

  return (

    <CountryDataContextProvider>    

      <GlobalStyle />
        <ThemeProvider theme={isDarkTheme ? THEME.DARK : THEME.LIGHT}>
          <Switch>
              <Route exact path={ROUTES.HOME}>
                  <Home />
              </Route>
              <Route exact path={`${ROUTES.FEATURED}/:countryCode`}>
                  <Featured /> 
              </Route>          

          </Switch>   
        </ThemeProvider>

    </CountryDataContextProvider>

  );
}

export default App;
