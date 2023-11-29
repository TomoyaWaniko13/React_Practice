export const InputArea = () => {
    return (
        <div className={"text-center"}>
            <input type="text" placeholder={"Enter your tasks:"}
                   className={"border border-black text-2xl p-5 ml-10  rounded-3xl"}/>
            <button
                className={"border-2 border-black text-2xl p-5 m-10  rounded-3xl hover:bg-black hover:text-white "}>Add
                your Task
            </button>
        </div>
    )
}