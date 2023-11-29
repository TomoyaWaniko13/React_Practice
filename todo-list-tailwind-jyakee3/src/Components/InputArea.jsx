export const InputArea = ({inputText, onChangeAdd, onKeyDownAdd, onClickAdd, disabled}) => {

    return (
        <div className={"my-10 flex justify-center"}>

            <input type="text"
                   placeholder={"Enter your Task:"}
                   className={"border border-black p-5 mx-10 rounded-3xl"}
                   value={inputText}
                   onChange={onChangeAdd}
                   onKeyDown={onKeyDownAdd}
                   disabled={disabled}
            />
            <button
                className={"border-2 border-black px-6 py-3 rounded-3xl hover:bg-black hover:text-white"}
                onClick={onClickAdd}
                disabled={disabled}
            >
                Add
            </button>
        </div>
    );
}