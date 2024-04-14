import {useEffect, useLayoutEffect, useState} from "react";

const Example = () => {
    const [isTimerDisplayed, setIsTimerDisplayed] = useState(false);

    return (
        <>
            {isTimerDisplayed && <Timer/>}
            <button onClick={() => setIsTimerDisplayed(prevState => !prevState)}>
                {isTimerDisplayed ? 'hide a timer' : 'show a timer'}
            </button>
        </>
    );
};

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // * If isRunning toggles from false to true, the effect will run,
    // setting up a new interval timer.
    // * If isRunning changes from true to false, React will first run the
    // cleanup function from the previous effect to clear the interval, and
    // then re-run the effect function, which will check the isRunning state
    // and decide not to set up a new timer.
    useEffect(() => {

        let intervalId = null;

        if (isRunning) {
            intervalId = window.setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000);
        }

        return () => {
            window.clearInterval(intervalId);
        }
    }, [isRunning]);

    useEffect(() => {
        window.localStorage.setItem('time-key', time);
    }, [time]);

    useLayoutEffect(() => {
        const storedTime =
            parseInt(window.localStorage.getItem('time-key'));
        if (!isNaN(storedTime)) {
            setTime(storedTime);
        }
    }, []);

    const onClickToggle = () => {
        setIsRunning(prevState => !prevState);
    };

    const onClickReset = () => {
        setTime(0);
        setIsRunning(false);
    }

    return (
        <>
            <p>{isRunning ? 'currently running' : 'currently not running'}</p>
            <button onClick={onClickToggle}>{isRunning ? 'stop' : 'start'}</button>
            <button onClick={onClickReset}>reset time</button>
            <p>{time}</p>
        </>
    );
};

export default Example;