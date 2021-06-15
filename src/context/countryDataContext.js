import React, {useState, useContext, createContext, useEffect } from 'react'
import * as API from '../constants/api'

const CountryDataContext = createContext()
const HasErrorContext = createContext()
const IsLoadingContext = createContext()

export function useCountryData() {
    return useContext(CountryDataContext)
}

export function useHasError() {
    return useContext(HasErrorContext)
}

export function useIsLoading() {
    return useContext(IsLoadingContext)
}

export function CountryDataContextProvider( {children}) {
    const [countryData, setCountryData] = useState([])
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // get the full set of country data once, when loaded
    useEffect(()=> {

        async function handleResponse(response) {
            setHasError(!response.ok)
            return response.ok && response.json ? response.json() : []
        }

        async function getData() {
            setIsLoading(true)
            const response = await fetch(API.ALL)
            const data = await handleResponse(response)
            setCountryData(data)
            setIsLoading(false)
            // save to local storage for featured countries
            localStorage.setItem('rest-countries-api', JSON.stringify(data))
            
        }
        getData()
        
        return () => {
            // clean up when app is unloaded
            localStorage.removeItem('rest-countries-api')
        }

    },[])

    return (
        <CountryDataContext.Provider value={countryData}>
            <HasErrorContext.Provider value={hasError}>
                <IsLoadingContext.Provider value={isLoading}>
                    {children}
                </IsLoadingContext.Provider>
            </HasErrorContext.Provider>
        </CountryDataContext.Provider>
    )
}







