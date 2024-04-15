import React, {useCallback} from 'react';
import {loadFull} from "tsparticles";
import {Card} from "./components/Card";
import {CardList} from "./components/CardList";
import robots from "./robots";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <App/>
            <CardList robots={robots}/>
        </div>
    );
}

export default App;
