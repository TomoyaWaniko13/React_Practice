import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./modules/counterSlice";


export default configureStore({
        reducer: {
            counter: counterReducer // 'counter' is the state key name
        }
    }
);