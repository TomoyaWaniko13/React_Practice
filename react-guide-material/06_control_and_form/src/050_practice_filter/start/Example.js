import Profile from "./components/Profile";
import {useState} from "react";

const persons = [
    {
        name: "Geo",
        age: 18,
        hobbies: ["sports", "music"],
    },
    {
        name: "Tom",
        age: 25,
        hobbies: ["movie", "music"],
    },
    {
        name: "Lisa",
        age: 21,
        hobbies: ["sports", "travel", "game"],
    },
];

const Example = () => {
    const [query, setQuery] = useState('');

    const filteredPersons
        = persons.filter(person => person.name.indexOf(query) !== -1).map(person => <li key={person.name}><Profile {...person}/></li>)

    return (
        <>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <ul>
                {filteredPersons}
            </ul>
        </>
    );
};

export default Example;
