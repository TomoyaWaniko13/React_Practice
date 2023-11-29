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

    const onClick = () =>{
        if(inputText === ""){
            return;
        }else {
            const newUnfinishedTasks = [...unfinishedTasks, inputText];
            setUnfinishedTasks(newUnfinishedTasks);
            setInputText("");
        }

    }


    return (
        <>
            <Width/>
            <InputArea inputText={inputText} onChange={onChange} onClick={onClick}/>
            <UnfinishedArea unfinishedTasks={unfinishedTasks} />
            <FinishedArea finishedTasks={finishedTasks} />
        </>
    )
}