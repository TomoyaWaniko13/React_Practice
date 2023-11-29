export const UnfinishedArea = ({unfinishedTasks, setUnfinishedTasks}) => {
    return (
        <>
            <div>
                <h1 className={"text-4xl font-bold my-10 text-center"}>Unfinished Tasks</h1>

                <ul>
                    {unfinishedTasks.map((task) => {
                        return (
                            <li className={"flex items-center"} key={task}>
                                <p className={"mx-10 text-2xl font-semibold"}>{task}</p>
                                <button className={"border-2 border-black text-2xl p-5 m-2  rounded-3xl " +
                                        "hover:bg-black hover:text-white"}>
                                    Done
                                </button>
                                <button className={"border-2 border-black text-2xl p-5 m-2  rounded-3xl " +
                                        "hover:bg-black hover:text-white"}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>


            </div>
        </>
    )
}