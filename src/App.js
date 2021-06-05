import React, { useState, useEffect } from 'react'
import {Switch, Route } from "react-router-dom"
import './App.css';
import { Home } from './pages'

function App() {

  const [countryData, setCountryData] = useState([])

  function getRemoteData() {

  }

  return (





    <div>
    {/* <Header /> */}
    
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/profile">
            {/* <Profile /> */}
        </Route>
        <Route path="/profile/info">
            {/* <Info/> */}
        </Route>
        <Route path="/profile/settings">
            {/* <Settings/> */}
        </Route>
    </Switch>
    
    {/* <Footer /> */}
    </div>



  );
}

export default App;
