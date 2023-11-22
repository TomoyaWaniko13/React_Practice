import {useState} from "react";
import {InputTask} from "./Components/InputTask";


function App() {
    const [text, setText] = useState("");
    const [unfinishedTasks, setUnfinishedTasks] = useState(["Task 1",  "Task 2"]);
    const [finishedTasks, setFinishedTasks] = useState(["Task A", "Task B"])

    const onChangeText = (event) => setText(event.target.value);

    const onClickAdd = () => {
        if (text === "") return;
        const newUnfinishedTasks = [...unfinishedTasks, text];
        setUnfinishedTasks(newUnfinishedTasks);
        setText("");
    };

    const onClickDone = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);

         const newFinishedTasks = [...finishedTasks, unfinishedTasks[index]];

        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    };
    const onClickDelete = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);
        setUnfinishedTasks(newUnfinishedTasks);
    };
    const onClickUndo = (index) => {
        const newFinishedTasks = [...finishedTasks];
        newFinishedTasks.splice(index, 1);

        const newUnfinishedTasks = [...unfinishedTasks, finishedTasks[index]];

        setFinishedTasks(newFinishedTasks);
        setUnfinishedTasks(newUnfinishedTasks);
    };
    return (
        <div className="App">
            <InputTask
                text={text}
                onChangeText={onChangeText}
                onClickAdd={onClickAdd}
            />


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
        </div>
    );
}

export default App;
