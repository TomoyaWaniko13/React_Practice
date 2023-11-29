export const UnfinishedTasks = ({unfinishedTasks, onClickDone, onClickDelete}) => {
    return (
        <>
            <h1 className={"font-bold text-2xl text-center mt-10 mb-5"}>Unfinished Tasks</h1>
            <ul>
                {unfinishedTasks.map((task, index) => {
                    return (
                        <li className={"flex items-center my-7"}>
                            <p className={"font-semibold text-xl"}>Task {index + 1}: {task}</p>
                            <button
                                className={"border-2 border-black px-6 py-3 ml-3 rounded-3xl hover:bg-black hover:text-white"}
                                onClick={() => onClickDone(index)}
                            >Done
                            </button>
                            <button
                                className={"border-2 border-black px-6 py-3 ml-1  rounded-3xl hover:bg-black hover:text-white"}
                                onClick={() => onClickDelete(index)}
                            >Delete
                            </button>
                        </li>
                    );
                })}

            </ul>
        </>
    )
}