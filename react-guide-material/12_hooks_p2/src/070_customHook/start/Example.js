import {useState} from "react";
import Timer from "./Timer";

const Example = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
        <>
            <button onClick={() => setIsDisplayed(prevState => !prevState)}>
                {isDisplayed ? 'hide a timer' : 'show  a timer'}
            </button>
            {isDisplayed && <Timer/>}
        </>
    );
};

export default Example;
