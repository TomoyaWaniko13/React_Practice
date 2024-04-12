import {createContext, useContext, useState} from "react";

export const ColorThemeContext = createContext();

export const ColorThemeProvider = ({children}) => {
    const [colorThemeState, setColorThemeState] = useState('light');

    return (
        <>
            <ColorThemeContext.Provider value={[colorThemeState, setColorThemeState]}>
                {children}
            </ColorThemeContext.Provider>
        </>
    );
};

export const useColorThemeState = () => useContext(ColorThemeContext);