import {createStore} from "redux";

const initialState = 0;
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case '+':
            return state + payload;
        case '-':
            return state - payload;
        default:
            return state;
    }
};

export default createStore(reducer);