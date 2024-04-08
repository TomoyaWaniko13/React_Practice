const AnimalFilterInput = ({inputValue, setInputValue}) => {
    return (
        <input type="text"
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
        />
    );
};

export default AnimalFilterInput;