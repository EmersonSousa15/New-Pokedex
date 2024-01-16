import { createContext, useContext, useEffect, useState } from "react";
import { theme as themeObj } from "./theme";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [themeString, setThemeString] = useState('light');
    const [theme, setTheme] = useState(themeObj.light);

    useEffect(() => {
        if (themeString == 'light') {
            setTheme(theme.light);
        } else {
            setTheme(theme.dark);
        }
    }, [themeString])

    return (
        <ThemeContext.Provider value={{ theme, setThemeString }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}