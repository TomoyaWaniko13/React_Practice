export const InputArea = ({inputText, onChange, onClickAdd}) => {

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onClickAdd();
            alert("KEYDOWN is working!")
        }
    }

    return (
        <div className={"my-10 flex justify-center"}>

            <input type="text"
                   placeholder={"Enter your Task:"}
                   className={"border border-black p-5 mx-10 rounded-3xl"}
                   value={inputText}
                   onChange={onChange}
                   onKeyDown={handleKeyDown}
            />
            <button
                className={"border-2 border-black px-6 py-3 rounded-3xl hover:bg-black hover:text-white"}
                onClick={onClickAdd}
            >
                Add
            </button>
        </div>
    );
}