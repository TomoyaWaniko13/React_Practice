import {useColorThemeState} from "../context/ColorContext";

const Main = () => {
    const [colorThemeState] = useColorThemeState();
    return (
        <main className={`content-${colorThemeState}`}>
            <h1>Change Color Theme State.</h1>
        </main>
    );
};

export default Main;
