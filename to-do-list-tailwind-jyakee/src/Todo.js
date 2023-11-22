import {useState} from "react";

export const Todo = () => {
    const [text, setText] = useState("");
    const [unfinishedTasks, setUnfinishedTasks] =
        useState(["Task neko san", "Task neko san"]);
    const [finishedTasks, setFinishedTasks] =
        useState(["task neko san 1", "task neko san 2"])
    const onChangeText = (event) => {
        setText(event.target.value)
    };
    const onClickAdd = () => {
        if (text === "") return;
        const newUnfinishedTasks = [...unfinishedTasks, text];
        setUnfinishedTasks(newUnfinishedTasks);
        setText("");
    }

    const onClickDelete = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);
        setUnfinishedTasks(newUnfinishedTasks);
    };
    const onClickDone = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);

        const newFinishedTasks = [...finishedTasks, unfinishedTasks[index]];
        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    };
    const onClickUndo = (index) => {
        let newFinishedTasks = [...finishedTasks];
        newFinishedTasks= newFinishedTasks.splice(index, 1);

        const newUnfinishedTasks = [...unfinishedTasks, finishedTasks[index]];

        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    };
    return (
        <>
            <section className={"flex"}>
                <input type="text" placeholder={"Enter your task:"}
                       value={text}
                       className={"border border-blue-200 p-2 m-2 rounded-3xl"}
                       onChange={onChangeText}/>
                <button className="border border-blue-200 px-4 m-2 rounded-3xl hover:bg-blue-500 hover:text-white"
                        onClick={onClickAdd}>
                    Add
                </button>
            </section>
            <section className={"mt-2 ml-3 text-gray-700 bg-blue-50 rounded-3xl p-3"}>
                <h1 className={"text-3xl "}>Unfinished Tasks</h1>
                <ul>
                    {unfinishedTasks.map((task,index) => {
                        return (
                            <li key={task} className={"flex"}>
                                <p className="mt-3">{task}</p>
                                <button
                                    className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}
                                    onClick={()=>onClickDone(index)}
                                >
                                    Done
                                </button>
                                <button
                                    className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}
                                    onClick={()=> onClickDelete(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className={"mt-9 ml-3 text-gray-700 bg-green-50 rounded-3xl p-3"}>
                <h1 className={"text-3xl"}>Finished Tasks</h1>
                <ul>
                    {finishedTasks.map((task,index) => {
                        return (
                            <li key={task} className={"flex"}>
                                <p className="mt-3">{task}</p>
                                <button
                                    className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}
                                    onClick={() => onClickUndo(index)}
                                >
                                    Undo
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>

    );
}
