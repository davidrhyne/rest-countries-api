// import { useEffect, useState, useContext } from 'react';
// import { CountryDataContext } from '../context/countryData';

// export default function useContent(target) {
//     const [countryData, setCountryData] = useState([]);
//     const [hasError, setHasError] = useState([]);
//     const { data } = useContext(CountryDataContext);
    
//     useEffect(() => {
//         async function handleResponse(response) {
//             setHasError(!response.ok)
//             return response.ok && response.json ? response.json() : []
//         }

//         async function getData() {
//             const response = await fetch(API.ALL)
//             const data = await handleResponse(response)
//             setCountryData(data)
//         }
//         getData()
//     }, [])
    
//     return { [target]: content };
}