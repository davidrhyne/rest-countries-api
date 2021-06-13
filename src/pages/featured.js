import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link, useParams } from 'react-router-dom';
import { useCountryData } from '../context/CountryDataContext'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Feature } from '../components'


export default function Featured() {
    // custom hook to get country data
    const countryData = useCountryData()

    // to get the 3-digit country alpha code
    const params = useParams()

    // of all the countries, get the one in the URL
    const featuredCountry = countryData.filter(country => country.alpha3Code === params.countryCode.toUpperCase())

    
    // borders is an array of the neighbor's alpha3Code value
    // so, get the full country values and sort them by name
    const borders = featuredCountry[0]
        .borders.map(countryCode => 
            countryData.filter( country => country.alpha3Code === countryCode)[0])
        .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    // pull out values in arrays to strings 
    const domainList = featuredCountry[0].topLevelDomain.join(", ")    
    const currenciesList = featuredCountry[0].currencies.map(currency => currency.name).join(", ")
    const languageList = featuredCountry[0].languages.map(language => language.name).join(", ")

    return (
        <div>
            <HeaderContainer />
            <Feature>
                <Link to={ROUTES.HOME}>
                    <Feature.Button backButton>
                        <i className="fas fa-arrow-left"><span>Back</span></i>
                    </Feature.Button>
                </Link>                 
                <Feature.Image src={featuredCountry[0].flag} alt={featuredCountry[0].name} />
                <Feature.Title>{featuredCountry[0].name} </Feature.Title>
                <Feature.SubSection panel1>                    
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
                </Feature.SubSection>
                <Feature.Spacer />
                <Feature.SubSection  panel2>
                    <Feature.Label>Top Level Domain:
                        <Feature.Text>{domainList} </Feature.Text>
                    </Feature.Label>           
                    <Feature.Label>Currencies:
                        <Feature.Text>{currenciesList}</Feature.Text>
                    </Feature.Label>
                    <Feature.Label>Languages:
                        <Feature.Text>{languageList}</Feature.Text>
                    </Feature.Label>    
                </Feature.SubSection>
                <Feature.Spacer />   
                <Feature.GroupHeading><span>Border Countries: </span>
                    <Feature.Group>
                        {borders.length ? borders.map(country => <Link key={country.alpha3Code} to={`/featured/${country.alpha3Code}` }><Feature.Button >{country.name}</Feature.Button></Link>) : <Feature.Text>no border countries</Feature.Text>}
                    </Feature.Group>
                </Feature.GroupHeading>
            </Feature>
            <FooterContainer />
        </div>
    )
}
