import "./App.scss";
import { useState } from "react";
import Headline from "./components/Headline.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import DeleteAllBtn from "./components/DeleteAllBtn.jsx";
import useLocalStorage from "./hooks/useLocalStorage";
import { Filters } from "./components/Filters.jsx";
const getId = (todos) =>
  todos.length === 0 ? 1 : Math.max(...todos.map((task) => task.id)) + 1;

function App() {
  const [todo, setTodo] = useState(""); // to co w nawiasie () to poczatkowa wartosc
  //useLocalStorage("task");
  const [todos, setTodos] = useLocalStorage("tasks");
  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   setTodos(getFromLocalStorage);
  // }, []);

  // wywoluj kiedy zmienimy totods i na sammym poczatku
  // useEffect(() => {
  //   updateToLocalStorage(todos);
  // }, [todos]);

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
          <Filters setFilter={setFilter} />
          {!!todos.filter((task) => task.status === "done").length && ( // conditional rendering jezeli jakikolwiek task ma status done wyswieyl clear btn
            <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks} />
          )}
        </div>
      </section>
    </div>
  );
}
export default App;

//   return (
//     <div className="todoapp">
//       <Headline />
//       <section className="todos">
//         <TodoAdd todo={todo} setTodo={setTodo} addTodo={handleAddTodo} />
//         <TodoList
//           todos={todos}
//           handleChangeStatus={handleChangeStatus}
//           handleDeleteTodo={handleDelete}
//         />

//         <div className="box">
//           <Counter todos={todos} />
//           <div className="filters-btn">
//             <button onClick={handleFilterChange} className="btn">
//               All
//             </button>

//             <button
//               className={filters === "active" ? "current" : ""}
//               onClick={handleFilterChange}
//             >
//               Active
//             </button>
//             <button
//               onClick={handleFilterChange}
//               className="btn"
//             >
//               Completed
//             </button>
//           </div>
//           {!!todos.filter((task) => task.status === "done").length && (
//             <DeleteAllBtn handleDeleteDoneTasks={handleDeleteDoneTasks} />
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
