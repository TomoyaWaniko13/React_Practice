export const FinishedArea = ({finishedTasks, onClickUndo}) => {
    return (
        <>
            <h1 className={"text-4xl font-bold my-10 text-center"}>Finished Tasks</h1>

            <ul>
                {finishedTasks.map((task, index) => {
                    return (
                        <li className={"flex items-center"} key={task}>
                            <p className={"mx-10 text-2xl font-semibold"}>{task}</p>
                            <button
                                className={"border-2 border-black text-2xl p-5 m-2  rounded-3xl hover:bg-black hover:text-white"}
                                onClick={() => onClickUndo(index)}
                            >Undo
                            </button>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}