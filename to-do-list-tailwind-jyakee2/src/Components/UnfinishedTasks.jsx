export const UnfinishedTasks = (props) =>{
    const {unfinishedTasks, onClickDone, onClickDelete} = props;

    return(
        <section className={"my-3.5 ml-12"}>
            <h1 className={"text-4xl font-bold"}>Unfinished Tasks</h1>
            <ul className={"mt-10"}>
                {unfinishedTasks.map((task,index) => {
                    return (
                        <li className={"flex"} key={task}>
                            <p className={"mt-4 mr-5 text-2xl"}>{task}</p>
                            <button
                                className={"border border-black text-2xl m-1.5 rounded-xl p-2 " +
                                    "hover:bg-blue-500 hover:text-white"}
                                onClick={() => onClickDone(index)}
                            >
                                Done
                            </button>
                            <button
                                className={"border border-black text-2xl m-1.5 rounded-xl p-2" +
                                    " hover:bg-blue-500 hover:text-white"}
                                onClick={()=>onClickDelete(index)}
                            >Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}