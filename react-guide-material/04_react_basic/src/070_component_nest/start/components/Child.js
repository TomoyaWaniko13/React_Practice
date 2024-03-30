import List from "./List";
import './Child.css'

const Child = () => {
    return (
        <div className={'component'}>
            <h3>Hello component!</h3>
            <List/>
        </div>
    );
};

export default Child;
