import {useState} from "react";
import {InputTask} from "./Components/InputTask";
import {FinishedTasks} from "./Components/FinishdedTasks";
import {UnfinishedTasks} from "./Components/UnfinishedTasks";


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

    const isMax = () =>{
        return unfinishedTasks.length >= 5;
    }

    return (
        <div className="App">
            <InputTask
                text={text}
                onChangeText={onChangeText}
                onClickAdd={onClickAdd}
                disabled={unfinishedTasks.length >= 5}
            />

            {unfinishedTasks.length >= 5 && (
                <p className={"text-red-500 ml-20 mb-10 text-4xl"}>
                    Max tasks is 5:
                </p>
            )}

            <UnfinishedTasks
                unfinishedTasks={unfinishedTasks}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />

            <FinishedTasks
            finishedTasks={finishedTasks}
            onClickUndo={onClickUndo}
            />

        </div>
    );
}

export default App;
