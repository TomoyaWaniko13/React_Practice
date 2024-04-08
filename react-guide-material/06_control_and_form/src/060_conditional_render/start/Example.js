import {useState} from "react";

const Example = () => {
    const animals = ["Dog", "Cat", "Rat", null];

    const [filterVal, setFilterVal] = useState("");

    return (
        <>
            <input
                type="text"
                value={filterVal}
                onChange={(e) => setFilterVal(e.target.value)}
            />
            <ul>
                {animals
                    .filter((animal) => {
                            // The nullish coalescing (??) operator is a logical operator that
                            // returns its right-hand side operand when its left-hand side operand
                            // is null or undefined, and otherwise returns its left-hand side operand.

                            const animalString = animal ?? '';
                            const isMatch = animalString.indexOf(filterVal) !== -1;
                            return isMatch;
                        }
                    )
                    .map(animal => {
                            // if statement:
                            // if (animal === 'Dog') {
                            //    return <li key={animal}>{animal}★</li>
                            // } else{
                            //     return <li key={animal}>{animal}</li>
                            // }

                            // conditional operator:
                            // return <li key={animal}>{animal} {animal === 'Dog' ? '★' : ''}</li>

                            // Logical AND &&:
                            return <li key={animal}> {animal ?? 'null or undefined.'} {animal === 'Dog' && '★'}</li>


                        }
                    )

                }
            </ul>
        </>
    );
};

export default Example;
