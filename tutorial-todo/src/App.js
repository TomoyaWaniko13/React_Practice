import logo from "./logo.svg";
import TodoList from "./TodoList";

function App() {
  cosnt[(todos, setTodos)] = useState(["Todo1", "Todo2"]);

  return (
    <div>
      <TodoList />
      <input type="text" placeholder="Enter your todo Item"></input>
      <button>Add your Task</button>
      <button>Delete your task</button>
      <div>Unfinished Tasks:0</div>
    </div>
  );
}

export default App;
