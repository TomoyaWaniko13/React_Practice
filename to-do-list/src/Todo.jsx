import {useState} from 'react';
import './Todo.css';

export const Todo = () => {
    //the todoText is from the <input> tage
    const [todoText, setTodoText] = useState('');
    const [unfinishedTasks, setUnfinishedTasks] = useState([
        'Unfinished Task 1',
        'Unfinished Task 2',
    ]);
    const [finishedTasks, setFinishedTasks] = useState([
        'Finished Task 1',
        'Finished Task 2',
    ]);

    const onChangeTodoText = event => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === '') return;
        const newTasks = [...unfinishedTasks, todoText];
        setUnfinishedTasks(newTasks);
        setTodoText('');
    };

    const onClickDelete = index => {
        const newUnfinisedTasks = [...unfinishedTasks];
        newUnfinisedTasks.splice(index, 1);
        setUnfinishedTasks(newUnfinisedTasks);
    };

    const onClickDone = index => {
        const newUnfinishedTasks = [...unfinishedTasks];
        newUnfinishedTasks.splice(index, 1);

        const newFinishedTasks = [...completeTodos,]
    };

    return (
        <>
            <div id="add-area">
                <input
                    id="input-area"
                    type="text"
                    placeholder="Enter your task"
                    value={todoText}
                    onChange={onChangeTodoText}
                />
                <button onClick={onClickAdd}>Add</button>
            </div>
            <div id="unfinished-area">
                <p className="title">Unfinisehd Tasks</p>
                <ul>
                    {unfinishedTasks.map((task, index) => {
                        return (
                            <li key={task}>
                                <div className="list-row">
                                    <p className="todo-item">{task}</p>
                                    <button onClick={() => onClickDone(index)}>done</button>
                                    <button onClick={() => onClickDelete(index)}>delete</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div id="finished-area">
                <p className="title">Finished Tasks</p>
                <ul>
                    {finishedTasks.map(task => {
                        return (
                            <li key={task}>
                                <div className="list-row">
                                    <p className="todo-item">{task}</p>
                                    <button>undo</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
