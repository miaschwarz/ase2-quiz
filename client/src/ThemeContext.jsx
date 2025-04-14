// ThemeContext.js
import { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkmode, setIsDarkMode ] = useState (false);

    const toggleDarkMode = () => {
        setIsDarkMode (!isDarkmode);
    };
    
    return (
        <ThemeContext.Provider value={{ isDarkmode, toggleDarkMode }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);