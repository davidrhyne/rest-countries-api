import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { useTheme, useThemeUpdate } from '../context/ThemeValueContext'


export function HeaderContainer( {children, ...restProps}) {

    const handleToggle = useThemeUpdate()
    const isDarkTheme = useTheme()

    return (
        <Header>
            <Header.Title to={ROUTES.HOME}>Where in the world?</Header.Title>
            <Header.Text onClick={handleToggle}>
                {isDarkTheme ? 
                    <i className="fas fa-lightbulb"><span>Light Mode</span></i> : 
                    <i className="far fa-moon"><span>Dark Mode</span></i>}
            </Header.Text>
        </Header>
    )
}
