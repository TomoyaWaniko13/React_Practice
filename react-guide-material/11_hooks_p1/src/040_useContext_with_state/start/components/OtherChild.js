import {MyContext} from "../Example";
import {useCallback, useContext, useState} from "react";

const OtherChild = () => {
    const [,setState] = useContext(MyContext);

    const onButtonClick = useCallback((event) => {
        setState(prevState => ++prevState);
    }, []);

    return (
        <div style={{ border: "4px solid red" }}>
            <h3>Other child</h3>
            <button onClick={onButtonClick}>+</button>
        </div>
    );
};

export default OtherChild;
