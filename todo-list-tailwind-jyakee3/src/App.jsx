import {Width} from "./Components/Width";
import {InputArea} from "./Components/InputArea";
import {UnfinishedArea} from "./Components/UnfinishedArea";
import {FinishedArea} from "./Components/FinishedArea";
import React, {useState} from "react";

export const App = () => {
    const [unfinishedTasks, setUnfinishedTasks] =
        useState(["Task neko san 1","Task neko san 2"])

    const [finishedTasks, setFinishedTasks] =
        useState(["Task neko san 101", "task neko san 102"])
    return (
        <>
            <Width/>
            <InputArea/>
            <UnfinishedArea unfinishedTasks={unfinishedTasks} setUnfinishedTasks={ setUnfinishedTasks}/>
            <FinishedArea finishedTasks={finishedTasks}
                          setUnfinishedTasks={setFinishedTasks}/>
        </>
    )
}