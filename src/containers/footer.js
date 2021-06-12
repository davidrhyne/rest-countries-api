import React from 'react'
import { Footer } from '../components';
// import { useTheme } from '../context/ThemeContext'

export function FooterContainer(props) {
    //console.log('footer container props', props)
    // const isDarkTheme = useTheme()
    return (
        <Footer >
            <Footer.Text>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</Footer.Text>
            <Footer.Text>Coded by <a href="mailto:davidrhyne@att.net">David Rhyne</a>.</Footer.Text>
        </Footer>
    )
}
