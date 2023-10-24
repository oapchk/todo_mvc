import { useState } from "react";
import "./app.scss";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState("");

  function handleValue(event) {
    setValue(event.target.value);
  }

  function handleAddTodo(event) {
    if (event.key === "Enter") {
      setTodos([...todos, value]);
      setValue("");
    }
  }
  function handleChangeStatus(todo) {}

  return (
    <div>
      <h1>todos</h1>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        onKeyUp={handleAddTodo}
      />
      <ul className="todos">
        {todos.map((todo, id) => (
          <li className="todo" key={id}>
            <span
              className="status"
              onClick={() => handleChangeStatus(todo)}
            ></span>
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
