import "./App.scss";
import { useState } from "react";
import Headline from "./components/Headline.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import DeleteAllBtn from "./components/DeleteAllBtn.jsx";

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
  const handleDelete = (todo) => {
    setTodos(todos.filter((task) => task !== todo)); // usuwanie z ui
  };
  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((task) => task.status !== "done"));
  };
  return (
    <div className="todoapp">
      <Headline />
      <section className="todos">
        <TodoAdd todo={todo} setTodo={setTodo} addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleChangeStatus={handleChangeStatus}
          handleDeleteTodo={handleDelete}
        />

        <div className="box">
          <Counter todos={todos} />
          {!!todos.filter((task) => task.status === "done").length && (
            <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks} />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
