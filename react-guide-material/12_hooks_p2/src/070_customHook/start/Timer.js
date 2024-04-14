import useTimer from "./useTimer";

const Timer = () => {
    const {time, isRunning, onClickToggle, onClickReset} = useTimer();

    return (
        <>
            <time>{time}</time>
            <button onClick={onClickToggle}>
                {isRunning ? 'stop' : 'start'}
            </button>
        </>
    );
};

export default Timer;