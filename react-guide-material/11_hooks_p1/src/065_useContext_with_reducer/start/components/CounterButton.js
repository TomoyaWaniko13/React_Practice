// import {useDispatch} from "../context/GlobalCounterProvider";
//
//
// const CounterButton = ({calcType, changeAmount}) => {
//
//     const dispatch = useDispatch();
//
//     const onClickDispatcher = () => dispatch({type:calcType, changeAmount});
//
//     return (
//         <button onClick={onClickDispatcher}>
//             {calcType}{changeAmount}
//         </button>
//     );
// };
//
// export default CounterButton;

import {useCounterDispatch} from "../context/GlobalCounterProvider";

const CounterButton = ({calcType, changeAmount}) => {
    const dispatch = useCounterDispatch();
    const onClickDispatcher = () => dispatch({calcType, changeAmount});

    return (
        <button onClick={onClickDispatcher}>
            {calcType} {changeAmount}
        </button>
    );
};

export default CounterButton;