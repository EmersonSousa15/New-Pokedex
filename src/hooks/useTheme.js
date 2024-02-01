import { useState, useEffect } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme("dark");
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    return {
        theme, setTheme
    }
}

export default useTheme