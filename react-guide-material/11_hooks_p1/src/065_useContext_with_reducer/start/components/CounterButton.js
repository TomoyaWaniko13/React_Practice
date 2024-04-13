import {useDispatch} from "../context/GlobalCounterProvider";

// CounterButton() modify the value of the state through setValue()
// based on the value of the calcType and changeAmount props.

const CounterButton = ({calcType, changeAmount}) => {

    const dispatch = useDispatch();

    const onClickDispatcher = () => dispatch({type:calcType, changeAmount});

    return (
        <button onClick={onClickDispatcher}>
            {calcType}{changeAmount}
        </button>
    );
};

export default CounterButton;