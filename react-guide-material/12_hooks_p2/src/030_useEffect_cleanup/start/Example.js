import {useEffect, useState} from "react";

const Example = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);
    return (
        <>
            {isDisplayed && <Timer/>}
            <button onClick={() => setIsDisplayed(prevState => !prevState)}>
                {isDisplayed ? 'hide a timer' : 'show a timer'}
            </button>
        </>
    );
};


const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {

        let intervalId;
        intervalId = setInterval(() => {
            setTime(prevState => prevState + 1);
        }, 1000);

        return () =>{
            window.clearInterval(intervalId);
        }

    }, []);

    useEffect(() => {
        document.title = 'container:' + time;
        window.localStorage.setItem('time-key', time);
    }, [time]);

    return (
        <>
            {time}
        </>
    );
};

export default Example;