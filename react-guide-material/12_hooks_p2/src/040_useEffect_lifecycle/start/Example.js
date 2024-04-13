import {useEffect, useState} from "react";

const Example = () => {

    // eslint-disable-next-line no-undef
    const [state, setState] = useState(0);

    useEffect(
        function update() {
            console.log('update()');

            return function cleanup() {
                console.log('cleanup() in update()');
            };
        },
        [state]
    );

    useEffect(
        () => {
            console.log('mounted');

            return () =>{
                console.log('unmounted');
            }
        },
        []
    );

    console.log('render');

    return (
        <div>
            <button onClick={() => setState(state + 1)}>
                Update.
            </button>
        </div>
    );
};

export default Example;
