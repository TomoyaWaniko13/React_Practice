import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text"></input>
      <button>Add your task</button>
      <button>delete finished task</button>
      <div>number of unfinished tasks:0</div>
    </>
  );
}

export default App;
