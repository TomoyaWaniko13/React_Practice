import {createContext} from "react";
import "./Example.css";
import Header from "./components/Header";
import Main from "./components/Main";
import {ColorThemeProvider} from "./context/ColorContext";

export const ColorContext = createContext();

const Example = () => {

    return (
        <ColorThemeProvider>
            <Header/>
            <Main/>
        </ColorThemeProvider>
    );
};

export default Example;
