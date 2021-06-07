import React from 'react'
import { Footer } from '../components';
import { useTheme } from '../context/ThemeContext'

export function FooterContainer(props) {
    //console.log('footer container props', props)
    const isDarkTheme = useTheme()
    return (
        <Footer isDarkTheme={isDarkTheme}>
            <Footer.Text isDarkTheme={isDarkTheme}>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>.</Footer.Text>
            <Footer.Text isDarkTheme={isDarkTheme}>Coded by <a href="mailto:davidrhyne@att.net">David Rhyne</a>.</Footer.Text>
        </Footer>
    )
}
