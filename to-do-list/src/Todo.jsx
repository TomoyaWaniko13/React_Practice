import "./Todo.css";

export const Todo = () => {
  return (
   <>
   <div id="add-area">
    <input id="input-area" type="text" placeholder="Enter your task" />
    <button id="add-button">Add</button>
   </div>
   <div id="unfinished-area">
    <p>Unfinisehd Tasks</p>
    <ul>
      <li class="unfinished-li">
        <p>TOOD</p>
        <button>done</button>
        <button>delete</button>
      </li>
      <li className="unfinished-li">
        <p>TOOD</p>
        <button>done</button>
        <button>delete</button>
      </li>
    </ul>
   </div>
   <div id="finished-area">
    <p>Finished Tasks</p>
    <ul>
      <li>
        <p>TOOD</p>
        <button>undo</button>
      </li>
      </ul>
   </div>
   </>
  );
};
