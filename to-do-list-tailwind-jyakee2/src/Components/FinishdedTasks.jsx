export const FinishedTasks = (props) =>{
    const {finishedTasks, onClickUndo} = props;
    return(
        <section className={"mt-10 ml-12"}>
            <h1 className={"text-4xl my-10 font-bold"}>Finished Tasks</h1>
            <ul>
                {finishedTasks.map((task,index) => {
                    return (
                        <li className={"flex"} key={task}>
                            <p className={"mt-4 mr-5 text-2xl"}>{task}</p>
                            <button
                                className={"border border-black text-2xl m-1.5 rounded-xl p-2 " +
                                    "hover:bg-blue-500 hover:text-white"}
                                onClick={()=> onClickUndo(index)}
                            >
                                Undo
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}