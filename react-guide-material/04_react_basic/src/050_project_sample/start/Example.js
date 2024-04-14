import {useEffect} from "react";

const Example = () => {
    function getOnClick() {
        return event => console.log(event);
    }

    useEffect(() => {

    }, []);
    return (
        <div>
            <h3>start folder.</h3>
            <button onClick={getOnClick()}>
                Click me
            </button>
        </div>
    );
};

export default Example;
