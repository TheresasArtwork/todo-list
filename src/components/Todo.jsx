import { useState } from "react";
import TodoForm from "../components/TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="todo-row-container">
        {todo.isComplete ? (
          <>
            <MdOutlineCheckBox
              className="checkbox-icon done"
              onClick={() => completeTodo(todo.id)}
            />
            <div key={todo.id}>{todo.text}</div>
          </>
        ) : (
          <>
            <MdCheckBoxOutlineBlank
              className="checkbox-icon"
              onClick={() => completeTodo(todo.id)}
            />
            <div key={todo.id}>{todo.text}</div>
          </>
        )}
      </div>

      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
