import "./App.scss";
import { useState } from "react";
import Headline from "./components/Headline.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import DeleteAllBtn from "./components/DeleteAllBtn.jsx";
import useLocalStorage from "./hooks/useLocalStorage";
// import Filters from "./components/Filters.jsx";
const getId = (todos) =>
  todos.length === 0 ? 1 : Math.max(...todos.map((task) => task.id)) + 1;

function App() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useLocalStorage("tasks");
  const [filter, setFilter] = useState("all");

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
    setTodos(todos.filter((task) => task !== todo));
  };
  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((task) => task.status !== "done"));
  };
  const handleFilteredTasks = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="todoapp">
      <Headline />
      <section className="todos">
        <TodoAdd todo={todo} setTodo={setTodo} addTodo={handleAddTodo} />
        <TodoList
          todos={todos.filter((task) => {
            if (filter === "all") {
              return true;
            } else if (filter === "active") {
              return task.status === "in progress";
            } else if (filter === "completed") {
              return task.status === "done";
            }
            return true;
          })}
          handleChangeStatus={handleChangeStatus}
          handleDeleteTodo={handleDelete}
        />

        <div className="box">
          <Counter todos={todos} />
          {!!todos.length && (
            <div className="box__filters">
              <button
                className="btn btn-filters"
                onClick={() => handleFilteredTasks("all")}
              >
                All
              </button>
              <button
                className="btn btn-filters"
                onClick={() => handleFilteredTasks("active")}
              >
                Active
              </button>
              <button
                className="btn btn-filters"
                onClick={() => handleFilteredTasks("completed")}
              >
                Completed
              </button>
            </div>
          )}
          {!!todos.filter((task) => task.status === "done").length && (
            <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks} />
          )}
        </div>
      </section>
    </div>
  );
}
export default App;
