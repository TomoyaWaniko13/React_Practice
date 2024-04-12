import {useColorThemeState} from "../context/ColorContext";

const Header = () => {
    const [colorThemeState, setColorThemeState] = useColorThemeState();

    const COLOR_THEMES = ['light', 'dark', 'red'];

    const changeColorThemeState = (e) => setColorThemeState(e.target.value);

    return (
        <header className={`content-${colorThemeState}`}>
            {COLOR_THEMES.map((_theme) => {
                    return (
                        <label key={_theme}>
                            <input type="radio"
                                   value={_theme}
                                   checked={_theme === colorThemeState}
                                   onChange={changeColorThemeState}
                            />
                            {_theme}
                        </label>
                    )
                }
            )
            }
        </header>
    );
};

export default Header;

