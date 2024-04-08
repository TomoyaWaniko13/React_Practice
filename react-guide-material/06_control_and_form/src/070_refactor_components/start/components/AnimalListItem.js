const AnimalListItem = ({animal}) => {
    return (
        <li>{animal} {animal === 'Dog' && '*'}</li>
    )
}
export default AnimalListItem;