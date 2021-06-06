import React, { useState, useEffect }  from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import * as API from '../constants/api';

export default function Home() {

    const [countryData, setCountryData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [hasError, setHasError] = useState(false)
    const [regionValue, setRegionValue] = useState("")

    useEffect( ()=> {

        async function handleResponse(response) {
            setHasError(!response.ok)
            return response.ok && response.json ? response.json() : []
        }

        async function getData() {
            const searchByName = `${API.NAME}${searchValue}`
            const searchByRegion = `${API.REGION}${regionValue}`
            //const searchApi = !searchValue ? API.ALL : searchByName
            const searchApi = regionValue !== 'none' ? searchByRegion : !searchValue ? API.ALL : searchByName

            //console.log(searchApi)

            const response = await fetch(searchApi)
            const data = await handleResponse(response)
            
            // if there is a region and search value, then filter region data by search value
            // else, use the data as-is
            regionValue !== 'none' && searchValue 
                ? setCountryData(data.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase())))                
                : setCountryData(data)
        }
        getData()

    },[searchValue, regionValue])

    console.log('searchValue = ', searchValue)
    console.log('regionValue = ', regionValue)
    console.log('countries = ', countryData)

    return (
        <div>
            <HeaderContainer>
                <p>this is body of the header</p>
            </HeaderContainer>
            <input value={searchValue} onChange={({target})=> setSearchValue(target.value)}></input>
            <h3>this is the home page</h3>
            <p>Oops, there is a problem, please check the search field = {hasError ? "true" : "false"}</p>
            <select value={regionValue} onChange={({target})=> setRegionValue(target.value)}>
               <option value="none">Filter By Region</option>  
               <option value="africa">Africa</option>
               <option value="americas">Americas</option>
               <option value="asia">Asia</option>
               <option value="europe">Europe</option>
               <option value="oceania">Oceania</option>
            </select>
            {!countryData.length ? <p>Sorry, no countries were found</p> : 
                countryData.map(country => <span>{country.name}</span>)
            
            }
            <FooterContainer>
                <p>this is body of the Footer</p>
            </FooterContainer>
        </div>
    )
}
