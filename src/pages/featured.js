import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link as ReachRouterLink, useParams } from 'react-router-dom';
import { useCountryData } from '../context/countryDataContext'

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Feature } from '../components'


export default function Featured() {
    const countryData = useCountryData()
    
    //console.log('featured', countryData)

    const params = useParams()
    console.log(params.countryCode)


    const featuredCountry = countryData.filter(country => country.alpha3Code === params.countryCode.toUpperCase())
    console.log(featuredCountry)
    const borders = featuredCountry[0].borders.map(countryCode => 
        countryData.filter( country => country.alpha3Code === countryCode)
    )
    console.log(borders)
    //console.log(featuredCountry.borders)
    return (
            <div>
            <HeaderContainer> this is the header</HeaderContainer>
            <Feature>
                <Feature.Text>{featuredCountry[0].name} </Feature.Text>
                <Feature.Text>{featuredCountry[0].nativeName} </Feature.Text>
                <ReachRouterLink to={ROUTES.HOME}>go home</ReachRouterLink>
                
            </Feature>
            <FooterContainer>this is the footer</FooterContainer>
            </div>

    )
}
