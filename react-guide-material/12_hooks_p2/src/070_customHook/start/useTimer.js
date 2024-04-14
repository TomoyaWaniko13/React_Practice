import {useEffect, useLayoutEffect, useState} from "react";

const useTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        let intervalId = null;
        if (isRunning) {
            intervalId = window.setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000);
        }

        return () => {
            window.clearInterval(intervalId);
        };
    }, [isRunning]);

    useEffect(() => {
        document.title = time;
        window.localStorage.setItem('time-key', time);
    }, [time]);

    useLayoutEffect(() => {
        const storedTime = parseInt(window.localStorage.getItem('time-key'));
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

    return {time, isRunning, onClickToggle, onClickReset};
};
export default useTimer;