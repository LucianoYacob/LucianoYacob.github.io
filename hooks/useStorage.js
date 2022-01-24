import { useState, useEffect } from 'react';

const useStorage = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        let db = localStorage.getItem("theme");
        setTheme(db === null ? "light" : db);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [ theme ]);

    return {
        theme,
        setTheme
    }
}

export default useStorage;