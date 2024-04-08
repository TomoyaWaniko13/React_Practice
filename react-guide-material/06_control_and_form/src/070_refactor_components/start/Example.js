import {useState} from 'react';
import AnimalUnorderedList from "./components/AnimalUnorderedList";
import SearchInput from "./components/SearchInput";

const Example = () => {
    const animals = ['Dog', 'Cat', 'Leopard','Elephant'];

    const [inputValue,setInputValue]= useState('');
    const filteredAnimals = animals.filter(animal => animal.indexOf(inputValue) !== -1);


    return (
        <>
            <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
            <AnimalUnorderedList  filteredAnimals={filteredAnimals}/>
        </>
    );
};

export default Example;