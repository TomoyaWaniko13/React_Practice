import {useState} from "react";

const Example = () => {
    // personObj is an initial state
    const catObj = {name: 'Neko san', age: 2, weight: 22.2};
    const [cat, setCat] = useState(catObj);

    // const changeName = (e) => {
    //     setPerson({name: e.target.value, age: person.age});
    // }

    // The following changeName() method doesn't work
    // because new object is not created.
    // const changeName = (e) => {
    //     person.name = e.target.value;
    //     setPerson(person);
    // }

    const changeName = (e) => {
        console.log(...cat);
        setCat({...cat, name: e.target.value});
    }
    const changeAge = (e) => {
        setCat({...cat, age: e.target.value});
    }
    const changeWeight = (e) => {
        setCat({...cat, weight: e.target.value})
    }
    const reset = () => {
        setCat({name: '', age: ''});
    }

    return (
        <>
            <h3>Name: {cat.name}</h3>
            <h3>Age: {cat.age}</h3>
            <h3>Neko: {cat.weight}</h3>
            <input type="text" value={cat.name} onChange={changeName}/>
            <input type="text" value={cat.age} onChange={changeAge}/>
            <input type="text" value={cat.weight} onChange={changeWeight}/>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
};

export default Example;