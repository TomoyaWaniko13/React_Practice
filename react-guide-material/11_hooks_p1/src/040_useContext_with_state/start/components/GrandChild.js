import {useContext} from "react";
import {MyContext} from "../Example";

const GrandChild = () => {
    const [state] = useContext(MyContext);

    return (
        <div style={{border: "4px solid green"}}>
            <h3>grand child component</h3>
            <p>{state}</p>
        </div>
    );
};
export default GrandChild;
