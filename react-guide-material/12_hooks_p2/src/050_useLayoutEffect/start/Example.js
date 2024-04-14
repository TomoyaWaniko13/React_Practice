import {useEffect, useLayoutEffect, useState} from "react";
import Random from "./Random";

const Example = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
        <>
            {isDisplayed && <Timer/>}
            <button onClick={() => setIsDisplayed(prevState => !prevState)}>
                Toggle:
            </button>
        </>
    );
};

const Timer = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        document.title = time;
        window.localStorage.setItem('time-key', time);
    });

    useLayoutEffect(() => {
        const storedTime = parseInt(window.localStorage.getItem('time-key'));
        if (!isNaN(storedTime)) {
            setTime(storedTime);
        }

    }, []);

    return (
        <h3>
            <time>{time}</time>
            <Random/>
        </h3>
    );
};

export default Example;