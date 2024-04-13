import {useCounterDispatch} from "../context/CounterProvider";

// CounterButton() modify the value of the state through setValue()
// based on the value of the calcType and changeAmount props.
// In addition, CounterButton() displays the button and the changeAmount.
const CounterButton = ({calcType, changeAmount}) => {

    const dispatch = useCounterDispatch();

    const onClickDispatcher = () => {
        dispatch({type: calcType, changeAmount});
    };

    return <button onClick={onClickDispatcher}>{calcType}{changeAmount}</button>
}
export default CounterButton;