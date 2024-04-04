import {useState} from 'react';

const Example = () => {

    const [toggle, setToggle] = useState(true);
    const changeToggleValue = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <>
            <button onClick={changeToggleValue}>Toggle!!</button>
            {toggle ? <Count key={'A'} title={'A'}/> : <Count key={'B'} title={'B'}/>}

            {/*{toggle ? <Count title={'true'}/> : <div><Count title={'false'}/></div>}*/}

            {/*<Count title={'A'}/>*/}
            {/*{toggle && <Count title={'B'}/>}*/}
        </>
    )
}

const Count = ({title}) => {
    const [count, setCount] = useState();

    const countUp = () => {
        setCount(prevState => prevState + 1);
    }
    const countDown = () => {
        setCount(prevState => prevState - 1);
    }

    return (
        <>
            <h3>{title}: {count}</h3>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
