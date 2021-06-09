import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link, useParams } from 'react-router-dom';
import { useCountryData } from '../context/countryDataContext'
// import { useTheme } from '../context/old_ThemeContext'
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
    console.log('featuredCountry[0]', featuredCountry[0].flag)
    return (
            <div>
            <HeaderContainer> this is the header</HeaderContainer>
            <Feature>
                <Link to={ROUTES.HOME}><i class="fas fa-arrow-left"><span>Back</span></i></Link>
                <Feature.Image src={featuredCountry[0].flag} alt={featuredCountry[0].name} />
                
                <Feature.Title>{featuredCountry[0].name} </Feature.Title>
                <Feature.Label>Native Name:
                    <Feature.Text>{featuredCountry[0].nativeName} </Feature.Text>
                </Feature.Label>
                <Feature.Label>Population:
                    <Feature.Text>{featuredCountry[0].population.toLocaleString()} </Feature.Text>
                </Feature.Label>
                <Feature.Label>Region:
                    <Feature.Text>{featuredCountry[0].region} </Feature.Text>
                </Feature.Label>
                <Feature.Label>Sub Region:
                    <Feature.Text>{featuredCountry[0].subregion} </Feature.Text>
                </Feature.Label>       
                <Feature.Label>Capital:
                    <Feature.Text>{featuredCountry[0].capital} </Feature.Text>
                </Feature.Label>
                <Feature.Label>Top Level Domain:
                    <Feature.Text>{featuredCountry[0].topLevelDomain} </Feature.Text>
                </Feature.Label>           
                <Feature.Label>Currencies:
                    {featuredCountry[0].currencies.map(currency => <Feature.Text>{currency.name}</Feature.Text>)}
                </Feature.Label>
                <Feature.Label>Languages:
                    {featuredCountry[0].languages.map(language => <Feature.Text>{language.name}</Feature.Text>)}
                </Feature.Label>                              
                <Feature.Label>Border Countries:
                    {borders.length ? borders.map(country => <Feature.Button><Link to={`/featured/${country.alpha3Code}`}>{country.name}</Link></Feature.Button>) : <div>no border countries</div>}
                </Feature.Label>
            </Feature>
            <FooterContainer >this is the footer</FooterContainer>
            </div>

    )
}
