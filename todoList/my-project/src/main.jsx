import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList.jsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <TodoList/>
        </DevSupport>
    </React.StrictMode>,
);
