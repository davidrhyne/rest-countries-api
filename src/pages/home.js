import React, { useState, useEffect, useContext }  from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Card } from '../components'
import { Link as ReachRouterLink } from 'react-router-dom'
import { useCountryData, useHasError } from '../context/countryDataContext'


export default function Home() {

    //const [countryData, setCountryData] = useState([])
    const countryData = useCountryData()
    const hasError = useHasError()
    const [filteredCountryData, setFilteredCountryData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    //const [hasError, setHasError] = useState(false)
    const [regionValue, setRegionValue] = useState("")



    // // get the full set of country data once, when loaded
    // useEffect(()=> {
    //     console.log('api getting the data')

    //     async function handleResponse(response) {
    //         setHasError(!response.ok)
    //         return response.ok && response.json ? response.json() : []
    //     }

    //     async function getData() {
    //         const response = await fetch(API.ALL)
    //         const data = await handleResponse(response)
    //         setCountryData(data)
    //     }
    //     getData()

    // },[])

    // use filteredCountryData for displaying the countries that have 
    // been filtered by regionValue and/or searchValue, or show all
    useEffect( ()=> {
        const data = countryData
        const searchByName = searchValue.toLowerCase()
        const searchByRegion = regionValue.toLowerCase()
        //console.log('searchByName', searchByName, 'searchByRegion', searchByRegion, 'filter: data',data)
        

        if (searchByName && searchByRegion ) {
            setFilteredCountryData(data.filter(country => country.name.toLowerCase().includes(searchByName) && country.region.toLowerCase() === searchByRegion ))
        } else if (searchByRegion) {
            setFilteredCountryData(data.filter(country => country.region.toLowerCase() === searchByRegion ))
        } else if (searchByName) {
            setFilteredCountryData(data.filter(country => country.name.toLowerCase().includes(searchByName) ))
        } else {
            setFilteredCountryData(data)
        }

    },[countryData, searchValue, regionValue])

    console.log('searchValue = ', searchValue)
    console.log('regionValue = ', regionValue)
    console.log('countries = ', filteredCountryData)

    return (
        <div>
        

            <HeaderContainer>
                <p>this is body of the header</p>
            </HeaderContainer>
            <input value={searchValue} onChange={({target})=> setSearchValue(target.value)}></input>
            <h3>this is the home page</h3>
            {/* <p>Oops, there is a problem, please check the search field = {hasError ? "true" : "false"}</p> */}
            <select value={regionValue} onChange={({target})=> setRegionValue(target.value)}>
               <option value="">Filter By Region</option>  
               <option value="africa">Africa</option>
               <option value="americas">Americas</option>
               <option value="asia">Asia</option>
               <option value="europe">Europe</option>
               <option value="oceania">Oceania</option>
            </select>
           
                <Card.Group>
                    {!filteredCountryData.length ? <p>Sorry, no countries were found</p> : 
                        filteredCountryData.map(country => {
                            return (
                                <Card key={country.alpha3Code}>
                                    <Card.Image src={country.flag} alt={country.name} />
                                    
                                        <ReachRouterLink to={`/featured/${country.alpha3Code}`}>
                                            
                                                <Card.Title>{country.name}</Card.Title>
                                            
                                        </ReachRouterLink>
                                    
                                    <Card.Label>Population:</Card.Label>
                                    <Card.Text>{country.population}</Card.Text>
                                    <Card.Label>Region:</Card.Label>
                                    <Card.Text>{country.region}</Card.Text>
                                    <Card.Label>Capital:</Card.Label>
                                    <Card.Text>{country.capital}</Card.Text>
                                </Card>)
                        })                
                    }
                </Card.Group>
      
            <FooterContainer>
                <p>this is body of the Footer</p>
            </FooterContainer>
        </div>
    )
}
