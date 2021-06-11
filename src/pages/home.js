import React, { useState, useEffect, useContext }  from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Card, Input } from '../components'
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
    const [isRegionListVisible, setIsRegionListVisible] = useState(false)



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

    function handleClick() {
        console.log('clicked')
        setIsRegionListVisible(prevValue => !prevValue)
        console.log('isRegionListVisible = ', isRegionListVisible)
    }

    // console.log('searchValue = ', searchValue)
    // console.log('regionValue = ', regionValue)
    // console.log('countries = ', filteredCountryData)

    return (
        <div>
        

            <HeaderContainer />               
            <Input>
                <Input.Group>
                    <Input.Icon><i class="fas fa-search"></i></Input.Icon>
                    <Input.InputField><input value={searchValue} placeholder="Search for a country..." onChange={({target})=> setSearchValue(target.value)}></input></Input.InputField>
                </Input.Group>
            {/* <span><i class="fas fa-search"></i><input value={searchValue} placeholder="Search for a country..."onChange={({target})=> setSearchValue(target.value)}></input></span> */}
            
            {/* <p>Oops, there is a problem, please check the search field = {hasError ? "true" : "false"}</p> */}
                <Input.Group>
                    <Input.Text onClick={handleClick}>Filter By Region</Input.Text>
                
                <Input.DropDown 
                        value={regionValue} 
                        hidden={isRegionListVisible}
                        onClick={({target})=> setRegionValue(target.textContent.slice(0,3) === 'All' ? "" : target.textContent)}>
                        <li value="" >All</li>  
                        <li value="africa">Africa</li>
                        <li value="americas">Americas</li>
                        <li value="asia">Asia</li>
                        <li value="europe">Europe</li>
                        <li value="oceania">Oceania</li>
                </Input.DropDown>
                </Input.Group>
            </Input>
           
                <Card.Group>
                    {!filteredCountryData.length ? <p>Sorry, no countries were found</p> : 
                        filteredCountryData.map(country => {
                            return (
                                <Card key={country.alpha3Code}>
                                    <Card.Image src={country.flag} alt={country.name} />
                                    <Card.Section>
                                        <ReachRouterLink to={`/featured/${country.alpha3Code}`}>                                            
                                            <Card.Title>{country.name}</Card.Title>                                            
                                        </ReachRouterLink>                                                                            
                                        <Card.Label>Population: 
                                            <Card.Text>{country.population.toLocaleString()}
                                        </Card.Text></Card.Label>                                        
                                        <Card.Label>Region:
                                            <Card.Text>{country.region}
                                        </Card.Text></Card.Label>                                        
                                        <Card.Label>Capital: 
                                            <Card.Text>{country.capital}
                                        </Card.Text></Card.Label>
                                    </Card.Section>
                                </Card>)
                        })                
                    }
                </Card.Group>
      
            <FooterContainer />
        </div>
    )
}
