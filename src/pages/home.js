import React, { useState, useEffect}  from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Card, Input } from '../components'
import { Link as ReachRouterLink } from 'react-router-dom'
import { useCountryData, useIsLoading} from '../context/CountryDataContext'


export default function Home() {
    const countryData = useCountryData()
    const isLoading = useIsLoading()

    const [filteredCountryData, setFilteredCountryData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [regionValue, setRegionValue] = useState("")
    const [isRegionListVisible, setIsRegionListVisible] = useState(true)

    // use filteredCountryData for displaying the countries that have 
    // been filtered by regionValue and/or searchValue, or show all
    useEffect( ()=> {
        const data = countryData
        const searchByName = searchValue.toLowerCase()
        const searchByRegion = regionValue.toLowerCase()

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

    function handleDropDownClick() {
        setIsRegionListVisible(prevValue => !prevValue)
    }

    function handleOffDropDownClick() {
        // close the drop down box if user clicks off of the body
        setIsRegionListVisible(prevValue => prevValue === false ? !prevValue : prevValue )
    }

    function handleDropDownSelect(target) {
        setRegionValue(target.textContent.slice(0,3) === 'All' ? "" : target.textContent)
        setIsRegionListVisible(false)
    }

    return (
        <>
            <HeaderContainer />
            <Input >
                <Input.Group searchField>
                    <Input.Icon><i className="fas fa-search"></i></Input.Icon>
                    <Input.InputField><input name="search" aria-label="search" value={searchValue} placeholder="Search for a country..." onChange={({target})=> setSearchValue(target.value)}></input></Input.InputField>
                </Input.Group>            
                <Input.Group onClick={handleDropDownClick} dropDown>
                    <Input.Text>{regionValue ? regionValue : 'Filter By Region'}</Input.Text>                
                    <Input.DropDown                             
                            hidden={isRegionListVisible}
                            onClick={({target})=> handleDropDownSelect(target) }>
                            <li>All</li>  
                            <li>Africa</li>
                            <li>Americas</li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>Oceania</li>
                    </Input.DropDown>
                    <Input.Icon><i className="fas fa-chevron-down"></i></Input.Icon>
                </Input.Group>
            </Input>
            {isLoading ? <div className="isLoading">Loading the country data... thank you for your patience! MGMT</div> : null}
            <Card.Group onClick={handleOffDropDownClick}>
                {!filteredCountryData.length ? <p>Sorry, no countries meet those search criteria, please try again. </p> : 
                    filteredCountryData.map(country => {
                        return (
                            <Card key={country.alpha3Code}>
                            <ReachRouterLink to={`/featured/${country.alpha3Code}`}>                                            
                                <Card.Image src={country.flag} alt={country.name} />                                
                                    <Card.Section>                                        
                                        <Card.Title>{country.name}</Card.Title>                                                                                                                
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
                                </ReachRouterLink> 
                            </Card>
                        )
                    })                
                }
            </Card.Group>
            <FooterContainer />
        </>
    )
}
