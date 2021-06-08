import React, {useState, useContext, createContext } from 'react'


const ThemeValueContext = createContext()
const ThemeUpdateValueContext = createContext()

export function useTheme() {
    return useContext(ThemeValueContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateValueContext)
}


export function ThemeValueProvider({children}) {

    const [isDarkTheme, setIsDarkTheme] = useState(true)

    function toggleIsDarkTheme() {
        setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
    }

    return (

        <ThemeValueContext.Provider value={isDarkTheme}>
            <ThemeUpdateValueContext.Provider value={toggleIsDarkTheme}>
                {children}
            </ThemeUpdateValueContext.Provider>
        </ThemeValueContext.Provider>
    )

}