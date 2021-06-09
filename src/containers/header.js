import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { useTheme, useThemeUpdate } from '../context/ThemeValueContext'


export function HeaderContainer( {children}) {

    const handleToggle = useThemeUpdate()
    const isDarkTheme = useTheme()

    return (
        <Header>
            <Header.Title>Where in the world?</Header.Title>
            <Header.Text onClick={handleToggle}>
                {isDarkTheme ? 
                    <i class="fas fa-lightbulb"><span>Light Mode</span></i> : 
                    <i class="far fa-moon"><span>Dark Mode</span></i>}
            </Header.Text>
        </Header>
    )
}
