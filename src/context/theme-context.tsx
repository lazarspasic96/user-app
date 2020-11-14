import React from 'react'





export const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: (value) => ThemeContext.theme = value
})