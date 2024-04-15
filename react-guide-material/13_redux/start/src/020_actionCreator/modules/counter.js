
/**
 * Initial state of the counter.
 * @type {number}
 */
const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "counter/+":
            return state + payload;
        case "counter/-":
            return state - payload;
        default:
            return state;
    }
};


/**
 * Action creator for the 'add' action.
 *
 * @param {number} payload - The value to be added to the counter.
 * @returns {Object} The action object to be dispatched to the Redux store.
 * The action object has a 'type' property with the value "counter/+" and a 'payload' property with the value of the argument.
 */
const add = (payload) => {
    return {
        type: "counter/+",
        payload: payload
    };
};


/**
 * Action creator for the 'subtract' action.
 *
 * @param {number} payload - The value to be subtracted from the counter.
 * @returns {Object} The action object to be dispatched to the Redux store.
 * The action object has a 'type' property with the value "counter/-" and a 'payload' property with the value of the argument.
 */
const subtract = (payload) => {
    return {
        type: "counter/-",
        payload: payload
    };
};

export {reducer, add, subtract};