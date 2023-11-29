export const InputArea = ({inputText, onChange, onClick}) => {

    const handleKeyDown = (event) =>{
        if (event.key === "Enter") {
            onClick();
        }
    }

    return (
        <div className={"text-center"}>
            <input type="text" placeholder={"Enter your tasks:"}
                   className={"border border-black text-2xl p-5 ml-10  rounded-3xl"}
                   value={inputText}
                   onChange={onChange}
                   onClick={onClick}
                   onKeyDown={handleKeyDown}
            />
            <button
                className={"border-2 border-black text-2xl p-5 m-10  rounded-3xl " +
                    "hover:bg-black hover:text-white "}
                onClick={onClick}
            >
                Add your Task
            </button>
        </div>
    )
}