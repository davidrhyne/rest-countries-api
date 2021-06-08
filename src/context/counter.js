// import React, {createContext, useContext, useState} from 'react'



// const ThemeContext = createContext()
// const ThemeUpdateContext = createContext()

// export function useTheme() {
//     return useContext(ThemeContext)
// }

// export function useThemeUpdate() {
//     return useContext(ThemeUpdateContext)
// }

// export function ThemeContextProvider({ children }) {
//     const [ isDarkTheme, setIsDarkTheme ] = useState(true)

//     function toggleTheme() {
//         setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
//     }

//     return (
//         <ThemeContextProvider.Provider value={isDarkTheme}>
//             <ThemeUpdateContext.Provider value={toggleTheme}>
//                 {children}
//             </ThemeUpdateContext.Provider>
//         </ThemeContextProvider.Provider>
//     )
// }