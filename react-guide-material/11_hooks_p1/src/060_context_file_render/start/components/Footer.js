import {useUpdateTheme} from "../context/ThemeContext";

const Footer = () => {
    const setTheme = useUpdateTheme();

    console.log('footer')
    return (
        <footer>
            <p>footer</p>
        </footer>
    );
};

export default Footer;