import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [ isDarkTheme, setIsDarkTheme ] = useState(true)

    function toggleTheme() {
        setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
