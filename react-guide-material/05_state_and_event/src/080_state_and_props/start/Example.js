import {useState} from "react";

const Example = () => {
    const [toggle, setToggle] = useState(true);
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const toggleComponent = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <>
            <button onClick={toggleComponent}>Toggle!</button>
            {/*{toggle ?*/}
            {/*    <Count key={'A'} title={'A'} count={countA} setCount={setCountA}/> :*/}
            {/*    <Count　key={'B'} title={'B'} count={countB} setCount={setCountB}/>}*/}
            {toggle && <Count　 title={'B'} count={countB} setCount={setCountB}/>}
        </>
    );
};

const Count = ({title, count, setCount}) => {
    const incrementCount = () =>{
        setCount(prevState => prevState + 1);
    }
    const decrementCount = () =>{
        setCount(prevState => prevState - 1);
    }

    return (
        <>
            <h3>{title}: {count}</h3>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
};

export default Example;