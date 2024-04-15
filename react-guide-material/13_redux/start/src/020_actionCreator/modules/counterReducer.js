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

const add = (payload) => {
    return {
        type: "counter/+",
        payload: payload
    };
};

const subtract = (payload) => {
    return {
        type: "counter/-",
        payload: payload
    };
};

export {reducer, add, subtract};