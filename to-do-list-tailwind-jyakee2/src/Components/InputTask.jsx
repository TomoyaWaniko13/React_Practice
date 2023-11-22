export const InputTask = (props) => {
    const {text, onChangeText, onClickAdd, disabled} = props;
    return(
        <section>
            <div className={"flex p-10"}>
                <input type="text" placeholder={"Enter your task"}
                       className={"border border-black rounded-3xl p-3 "}
                       value={text}
                       onChange={onChangeText}
                       disabled={disabled}
                />
                <button
                    className={"border border-black text-2xl m-1.5 rounded-xl p-2 " +
                        "hover:bg-blue-500,text-white,border-none"}
                    onClick={onClickAdd}
                    disabled={disabled}
                >Add
                </button>
            </div>
        </section>
    )
}