import {useState} from "react";

const Example = () => {
    const [numberOfCount, setNumberOfCount] = useState(0);
    return (
        <>
            <CountResult title={'A'} numberOfCount={numberOfCount}/>
            <CountUpdate setNumberOfCount={setNumberOfCount}/>
        </>
    );
};

const CountResult = ({title, numberOfCount}) => {
    return (
        <>
            <h3>{title}: {numberOfCount}</h3>
        </>
    );
};

const CountUpdate = ({setNumberOfCount}) => {
    const incrementCount = () =>{
        setNumberOfCount(prevState => prevState + 1);
    }
    const decrementCount =() =>{
        setNumberOfCount(prevState => prevState - 1);
    }

    return (
        <>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
};

export default Example;
