const AnimalItem = ({animalElement}) => {
    return (
        <li key={animalElement}>
            {animalElement}{animalElement === 'Dog' && '★'}
        </li>
    );
};

export default AnimalItem;