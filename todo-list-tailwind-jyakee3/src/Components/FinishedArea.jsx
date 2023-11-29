import {useState} from "react";

export const FinishedArea = () => {
    const [finishedTasks, setFinishedTasks] = useState(["Task neko san 100", "Task neko san 101"])

    return (
        <>
            <h1 className={"text-4xl font-bold my-10 text-center"}>Finished Tasks</h1>

            <ul>
                {finishedTasks.map((task) => {
                    return (
                        <div className={"flex items-center"}>
                            <li><p className={"mx-10 text-2xl font-semibold"}>{task}</p></li>
                            <button
                                className={"border-2 border-black text-2xl p-5 m-2  rounded-3xl hover:bg-black hover:text-white"}>Undo
                            </button>
                        </div>
                    )
                })}
            </ul>

        </>
    )
}