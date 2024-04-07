import {useState} from "react";

const Example = () => {
    const [toggle, setToggle] = useState(true);

    const toggleComponent = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <>
            <button onClick={toggleComponent}>Toggle</button>
            {/*{toggle ? <Count key={'A'} title={'A'}/> : <Count key={'B'} title={'B'}/>}*/}
            <Count title={'A'}/>
            {toggle && <Count title={'B'}/>}
        </>
    );
};

const Count = ({title}) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevState => prevState + 1);
    };
    const decrementCount = () => {
        setCount(prevState => prevState - 1);
    };
    return (
        <>
            <h3>{title} : {count}</h3>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
};

export default Example;
