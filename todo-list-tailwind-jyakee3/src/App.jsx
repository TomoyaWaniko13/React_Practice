import {Width} from "./Components/Width";
import {InputArea} from "./Components/InputArea";
import {UnfinishedArea} from "./Components/UnfinishedArea";
import {FinishedArea} from "./Components/FinishedArea";
import React, {useState} from "react";

export const App = () => {
    const [inputText, setInputText] = useState("");

    const [unfinishedTasks, setUnfinishedTasks] =
        useState(["Task neko san 1", "Task neko san 2"])

    const [finishedTasks, setFinishedTasks] =
        useState(["Task neko san 101", "task neko san 102"])

    const onChange = (event) => setInputText(event.target.value);

    const onClick = () => {
        if (inputText === "") {
            return;
        } else {
            const newUnfinishedTasks = [...unfinishedTasks, inputText];
            setUnfinishedTasks(newUnfinishedTasks);
            setInputText("");
        }
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

    const onClickUndo = (index) =>{
        const newUnfinishedTasks = [...unfinishedTasks, finishedTasks[index]];

        const newFinishedTasks = [...finishedTasks];
        newFinishedTasks.splice(index, 1);

        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    }

    return (
        <>
            <Width/>
            <InputArea inputText={inputText} onChange={onChange} onClick={onClick}/>
            <UnfinishedArea unfinishedTasks={unfinishedTasks} onClickDone={onClickDone} onClickDelete={onClickDelete}/>
            <FinishedArea finishedTasks={finishedTasks} onClickUndo={onClickUndo} />
        </>
    )
}