import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link, useParams } from 'react-router-dom';
import { useCountryData } from '../context/countryDataContext'
import { useTheme } from '../context/ThemeContext'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Feature } from '../components'


export default function Featured() {
    const countryData = useCountryData()
    //const isDarkTheme = useTheme()
    //console.log('featured', countryData)

    const params = useParams()
    console.log(params.countryCode)


    const featuredCountry = countryData.filter(country => country.alpha3Code === params.countryCode.toUpperCase())
    console.log(featuredCountry)
    // borders is an array of the neighbor's alpha3Code value
    // so, get the full country values and sort them by name
    const borders = featuredCountry[0]
        .borders.map(countryCode => 
            countryData.filter( country => country.alpha3Code === countryCode)[0])
        .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    //console.log(borders.forEach(country => country.name))
    // console.log(borders)
    //console.log(featuredCountry.borders)
    return (
            <div>
            <HeaderContainer> this is the header</HeaderContainer>
            <Feature>
                <Link to={ROUTES.HOME}>go home</Link>
                <Feature.Text>{featuredCountry[0].name} </Feature.Text>
                <Feature.Text>{featuredCountry[0].nativeName} </Feature.Text>
                
                {borders.length ? borders.map(country => <Feature.Button><Link to={`/featured/${country.alpha3Code}`}>{country.name}</Link></Feature.Button>) : <div>no border countries</div>}
                
            </Feature>
            <FooterContainer >this is the footer</FooterContainer>
            </div>

    )
}
