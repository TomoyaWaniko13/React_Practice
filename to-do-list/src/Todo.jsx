import { useState } from 'react';
import './Todo.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState();

  const [unfinishedTasks, setUnfinishedTasks] = useState(['Todo1', 'Todo2']);
  const [finishedTasks, setFinishedTasks] = useState(['Todo1', 'Todo2']);

  const onChangeTodoText = event => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTasks = [...unfinishedTasks, todoText];
    setUnfinishedTasks(newTasks);
    setTodoText('');
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
          {unfinishedTasks.map(todo => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>done</button>
                <button>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="finished-area">
        <p className="title">Finished Tasks</p>
        <ul>
          {finishedTasks.map(todo => {
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>undo</button>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};
