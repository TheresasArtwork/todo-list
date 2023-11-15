import { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            value={input}
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todo-button edit">Update Todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="enter a new todo and press enter"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          ></input>
        </>
      )}
    </form>
  );
}

export default TodoForm;
