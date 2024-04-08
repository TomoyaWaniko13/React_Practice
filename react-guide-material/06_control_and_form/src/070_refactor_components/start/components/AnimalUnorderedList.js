import AnimalListItem from "./AnimalListItem";

const AnimalUnorderedList = ({filteredAnimals}) => {
    if (filteredAnimals.length === 0) {
        return <p>No animals found.</p>
    }

    return (
        <>
            <ul>
                {filteredAnimals.map(animal => <AnimalListItem key={animal} animal={animal}/>)}
            </ul>
        </>
    );
};

export default AnimalUnorderedList;