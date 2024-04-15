import { useDispatch } from "react-redux";

const CounterButton = ({type,  payload}) => {
    
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        dispatch({ type: 'counter/' + type,  payload });
    }

    return <button onClick={clickHandler}>{type}{payload}</button>
}
export default CounterButton;