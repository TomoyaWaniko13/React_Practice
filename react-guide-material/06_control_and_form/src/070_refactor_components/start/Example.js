import {useState} from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilterInput from "./components/AnimalFilterInput";

const Example = () => {

    const animalArray = ['Dog', 'Cat', 'Rat'];
    // const animalArray = [];
    const [inputValue, setInputValue] = useState('');

    const filteredAnimalArray =
        animalArray.filter(animalElement => animalElement.indexOf(inputValue) !== -1);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <AnimalFilterInput inputValue={inputValue} setInputValue={setInputValue}/>
            <AnimalList animalArray={filteredAnimalArray}/>
        </>
    );
};

export default Example;