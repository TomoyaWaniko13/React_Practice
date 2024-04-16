const isLoginReducer = (state = false, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return false + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}