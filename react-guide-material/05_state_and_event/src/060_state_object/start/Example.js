import {useState} from "react";

const Example = () => {
    const initialPersonObj = {name: 'Neko san', age: 2, weight: 22.2};
    const [personObj, setPersonObj] = useState(initialPersonObj);

    const changeName = (e) => {
        // newly created Object needs to be passed to the setPersonObj() method.
        // setPersonObj({name: e.target.value, age: personObj.age, weight: personObj.weight});
        setPersonObj({...personObj, name: e.target.value});
    }
    const changeAge = (e) => {
        // newly created Object needs to be passed to the setPersonObj() method.
        // setPersonObj({age: e.target.value, name: personObj.name, weight: personObj.weight});
        setPersonObj({...personObj, age: e.target.value});
    }
    const changeWeight = (e) => {
        // newly created Object needs to be passed to the setPersonObj() method.
        // setPersonObj({weight: e.target.value, name: personObj.name, age: personObj.age});
        setPersonObj({...personObj, weight: e.target.value});
    }

    return (
        <>
            <h3>Name: {personObj.name}</h3>
            <h3>Age: {personObj.age}</h3>
            <h3>Weight: {personObj.weight}</h3>
            <p>Change the name:</p>
            <input type="text" onChange={changeName}/>
            <p>Change the age:</p>
            <input type="text" onChange={changeAge}/>
            <p>Change the weight:</p>
            <input type="text" onChange={changeWeight}/>
        </>
    );
};

export default Example;