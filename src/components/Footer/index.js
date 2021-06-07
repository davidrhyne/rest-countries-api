import React from 'react'
import { Container, Text } from './styles/Footer'
// import { useTheme } from '../../context/ThemeContext'


export default function Footer({children, ...restProps}) {
    // const isDarkTheme = useTheme()
    // <Container isDarkTheme={isDarkTheme}{...restProps}>{children}</Container>
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Text = function FooterText({children, ...restProps}) { 
    console.log('footerText props', restProps)   
    return <Text {...restProps}>{children}</Text>
}