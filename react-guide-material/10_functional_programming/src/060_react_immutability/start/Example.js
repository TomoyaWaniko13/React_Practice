import {useState} from "react";

const Child = (props) => {
    console.log(props);

    // this is not allowed since the passed object shouldn't be changed:
    // props.state = {value: 1};

    const {state, setState} = {...props};
    console.log(state);
    console.log(setState);

    // running this setState() results in an infinite loop.
    // 1. updating the value of the 'state' by running setState() cause the Example() to re-render.
    // 2. running the Example() causes the Child() to re-render.
    // 3. this is an infinite loop!
    // setState({value: 1});

    const increment = () => {

        /*This code directly mutates the state object prev by incrementing prev.value.
        In React, direct mutation of state should be avoided because it does not trigger
        a re-render of the component. React’s state updates rely on a new object reference
        to determine if a re-render is necessary. When you mutate the existing state directly,
        React doesn't recognize that the state has changed because the object reference remains
        the same.*/
        // setState(prev => {
        //     prev.v alue += 1;
        //     return prev;
        // });
        setState(prev => {
            return {...prev, value: prev.value + 1};
        });
    }

    return (
        <>
            <span>{state.value}</span>
            <button onClick={increment}>+</button>
        </>
    );
};

const Example = () => {
    const [state, setState] = useState({value: 0});

    return (
        <>
            <div>
                <Child state={state} setState={setState}/>
            </div>
        </>
    );
};

export default Example;
