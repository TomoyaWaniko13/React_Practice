import {InputArea} from "./Components/InputArea";
import {useState} from "react";
import {UnfinishedTasks} from "./Components/UnfinishedTasks";
import {FinishedTasks} from "./Components/FinishedTasks";

export const App = () => {
    const [inputText, setInputText] = useState("");
    const [unfinishedTasks, setUnfinishedTasks] = useState(["Task neko san", "Task neko san", "Task neko san"]);
    const [finishedTasks, setFinishedTasks] = useState(["Task neko san", "Task neko san", "Task neko san"]);

    const onChangeAdd = (event) => setInputText(event.target.value);

    const onKeyDoneAdd = (event) => {
        if (event.key === "Enter") {
            onClickAdd();
        }
    }

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

    const onClickUndo = (index) => {
        const newUnfinishedTasks = [...unfinishedTasks, finishedTasks[index]];

        const newFinishedTasks = [...finishedTasks];
        newFinishedTasks.splice(index, 1);

        setUnfinishedTasks(newUnfinishedTasks);
        setFinishedTasks(newFinishedTasks);
    }

    //Todo fix isUpperLimit
    const isUpperLimit =  unfinishedTasks.length >= 5;

    return (
        <div>
            <InputArea
                inputText={inputText}
                onChangeAdd={onChangeAdd}
                onKeyDownAdd={onKeyDoneAdd}
                onClickAdd={onClickAdd}
                disabled={isUpperLimit}
            />
            {isUpperLimit && (
                <p className={"text-red-600 text-2xl ml-10"}>
                    The maximum number of tasks is five.
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
};