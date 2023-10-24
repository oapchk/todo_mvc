import { useState } from "react";

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

  return (
    <div>
      <h1>todos</h1>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        onKeyUp={handleAddTodo}
      />
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
