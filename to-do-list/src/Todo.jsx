import { useState } from 'react';
import './Todo.css';

export const Todo = () => {
  const [unfinishedTasks, setUnfinishedTasks] = useState(['Todo1', 'Todo2']);
  const [complteTasks, setCompleteTasks] = useState(['Todo1', 'Todo2']);

  return (
    <>
      <div id="add-area">
        <input id="input-area" type="text" placeholder="Enter your task" />
        <button id="add-button">Add</button>
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
          {complteTasks.map(todo => {
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
