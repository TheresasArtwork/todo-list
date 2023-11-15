import "./App.css";
import "./index.css";
import "./components/TodoStyle.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Your Todo List</h1>
        </div>
        <div className="todo-app">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
