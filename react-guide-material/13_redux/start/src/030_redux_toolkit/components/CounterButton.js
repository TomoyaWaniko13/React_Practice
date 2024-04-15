import {useDispatch} from "react-redux";
import {addCounterAction, subtractCounterAction} from "../store/modules/counterSlice"

const CounterButton = ({type, payload}) => {

    const dispatch = useDispatch();

    console.log(addCounterAction(payload)); // {type: 'counter/addCounterAction', payload: 2}

    const clickHandler = () => {
        const action = type === '+' ? addCounterAction(payload) : subtractCounterAction(payload);
        console.log(action)
        dispatch(action);
    };

    return <button onClick={clickHandler}>{type}{payload}</button>
}
export default CounterButton;