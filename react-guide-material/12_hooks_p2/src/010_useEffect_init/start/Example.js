import {useEffect, useState} from "react";

const Example = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('useEffect() gets called.')
        window.setInterval(() => {
            console.log('setInterval() gets called.');
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        document.title = 'container:' + time;
        window.localStorage.setItem('time-key', time);
    }, [time])

    return (
        <h3>
            <time>{time}</time>
            <span></span>
        </h3>
    );
};

export default Example;
