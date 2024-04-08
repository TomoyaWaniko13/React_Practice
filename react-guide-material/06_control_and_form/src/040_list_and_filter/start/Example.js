import {useState} from "react";

const animalArray =
    ['Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Zebra', 'Panda', 'Koala', 'Kangaroo',
        'Rhinoceros', 'Hippopotamus', 'Leopard', 'Cheetah', 'Wolf', 'Fox', 'Deer', 'Monkey',
        'Gorilla', 'Chimpanzee', 'Hyena', 'Alligator', 'Crocodile', 'Eagle', 'Falcon', 'Parrot',
        'Shark', 'Dolphin', 'Whale', 'Octopus', 'Turtle', 'Jaguar', 'Penguin', 'Seal', 'Sea Lion',
        'Walrus', 'Camel', 'Gazelle', 'Antelope', 'Moose', 'Squirrel', 'Rabbit', 'Hare', 'Bat', 'Lynx',
        'Ocelot', 'Orangutan', 'Sloth', 'Anteater', 'Armadillo', 'Skunk', 'Dog'];

const Example = () => {
    const [query, setQuery] = useState('');

    return (
        <>
            <h3>filter of an array:</h3>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <ul>
                {animalArray
                    .filter(animalElement => animalElement.indexOf(query) !== -1)
                    .map(filteredElement => <li key={filteredElement}>{filteredElement}</li>)
                }
            </ul>
        </>
    );
};

export default Example;