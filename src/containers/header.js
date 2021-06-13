import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { useTheme, useThemeUpdate } from '../context/ThemeValueContext'
import { useHasError } from '../context/CountryDataContext'

export function HeaderContainer( {children, ...restProps}) {

    const handleToggle = useThemeUpdate()
    const isDarkTheme = useTheme()
    const hasError = useHasError()

    return (        
        <Header>
            <Header.Title to={ROUTES.HOME}>Where in the world?</Header.Title>
            <Header.Text onClick={handleToggle}>
                {isDarkTheme ? 
                    <i className="fas fa-lightbulb"><span>Light Mode</span></i> : 
                    <i className="far fa-moon"><span>Dark Mode</span></i>}
            </Header.Text>
            <Header.Error style={{display: hasError ? 'block' : 'none'}}>{'Sorry, there is a problem receiving data from REST Countries API. Please try again later.'}</Header.Error>
        </Header>
    )
}
