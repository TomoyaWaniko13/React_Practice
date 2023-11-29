import {InputArea} from "./Components/InputArea";
import {useState} from "react";
import {UnfinishedTasks} from "./Components/UnfinishedTasks";

export const App = () => {
    const [inputText, setInputText] = useState("");
    const [unfinishedTasks, setUnfinishedTasks] = useState(["Task neko san 1", "Task neko san 2", "Task neko san 3"]);
    const [finishedTasks, setFinishedTasks] = useState(["Task neko san 1", "Task neko san 2", "Task neko san 3"]);


    const onChange = (event) => setInputText(event.target.value);

    const onClickAdd = () => {
        if (inputText === "") return;
        const newUnfinishedTasks = [...unfinishedTasks, inputText];
        setUnfinishedTasks(newUnfinishedTasks);
        setInputText("");
    }

    const onClickDone = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);

        const newFinishedTasks = [...finishedTasks, unfinishedTasks[index]];

        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    }

    const onClickDelete = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);

        setUnfinishedTasks(newUnfinishedTasks);
    }

    return (
        <div>
            <InputArea inputText={inputText} onChange={onChange} onClickAdd={onClickAdd}/>
            <UnfinishedTasks unfinishedTasks={unfinishedTasks} onClickDone={onClickDone} onClickDelete={onClickDelete}/>

        </div>
    )
}