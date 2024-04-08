import AnimalItem from "./AnimalItem";

const AnimalList = ({animalArray}) => {
    if (animalArray.length === 0) {
        return <h3>Animal not found.</h3>
    }
    return (
        <>
            <ul>
                {animalArray.map(animalElement => {
                    return (<AnimalItem animalElement={animalElement}/>);
                })}
            </ul>
        </>
    );
};

export default AnimalList;