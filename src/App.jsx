import "./App.scss";
import { useState } from "react";

const getId = (todos) =>
  todos.length === 0 ? 1 : Math.max(...todos.map((task) => task.id)) + 1;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // const getId = () => todos.length === 0 ? 1 : Math.max(...todos.map((task) => task.id)) + 1;

  const handleAddTodo = (evt) => {
    if (evt.key === "Enter" && todo.trim().length >= 3) {
      setTodos([
        {
          id: getId(todos),
          status: "in progress",
          title: todo,
        },
        ...todos,
      ]);
      setTodo("");
    }
  };
  const handleChangeStatus = (task) => {
    task.status = task.status === "in progress" ? "done" : "in progress";
    setTodos([...todos]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter((task) => task !== todo));
  };

  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((task) => task.status !== "done"));
  };

  return (
    <div className="todoapp">
      <h1>todos🐈</h1>
      <section className="todos">
        <input
          type="text"
          className="todo-input"
          value={todo}
          placeholder="What needs to be done?"
          onChange={(event) => setTodo(event.target.value)}
          onKeyUp={handleAddTodo}
        />
        <ul className="todos-list">
          {todos.map((task) => (
            <li className="todos-item" key={task.id}>
              <span
                className={
                  task.status === "in progress" ? "status" : "status done"
                }
                onClick={() => handleChangeStatus(task)}
              ></span>
              <span>{task.title}</span>
              <button
                className="btn-delete"
                onClick={() => handleDeleteTodo(task)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <div className="box">
          <p className="counter">
            {todos.filter((task) => task.status === "in progress").length} items
            left
          </p>
          {todos.some((task) => task.status === "done") && (
            <button className="btn" onClick={() => handleDeleteDoneTasks}>
              Clear{" "}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
