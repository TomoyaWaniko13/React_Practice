import {useState} from "react";

const Example = () => {
    const initialPerson = {name: 'Tom', age: 18};
    const [personState, setPersonState] = useState(initialPerson);

    const changeName = (e) =>{
        setPersonState({name: e.target.value})
    }

    return (
        <>
            <h3>Name: {personState.name}</h3>
            <h3>Age: {personState.age}</h3>

            <p>change name: </p>
            <input type="text"
                   onChange={changeName}
                   />
            <p>chagne</p>
        </>
    );
};

export default Example;