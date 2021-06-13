import React, {useState, useContext, createContext, useEffect } from 'react'
import * as API from '../constants/api'

const CountryDataContext = createContext()
const HasErrorContext = createContext()

export function useCountryData() {
    return useContext(CountryDataContext)
}

export function useHasError() {
    return useContext(HasErrorContext)
}

export function CountryDataContextProvider( {children}) {
    const [countryData, setCountryData] = useState([])
    const [hasError, setHasError] = useState(false)

    // get the full set of country data once, when loaded
    useEffect(()=> {
        console.log('api getting the data')

        async function handleResponse(response) {
            setHasError(!response.ok)
            return response.ok && response.json ? response.json() : []
        }

        async function getData() {
            const response = await fetch(API.ALL)
            const data = await handleResponse(response)
            setCountryData(data)
        }
        getData()

    },[])

    return (
        <CountryDataContext.Provider value={countryData}>
            <HasErrorContext.Provider value={hasError}>
                {children}
            </HasErrorContext.Provider>
        </CountryDataContext.Provider>
    )
}







