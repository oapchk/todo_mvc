import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, handleChangeStatus, handleDeleteTodo }) {
  return (
    <ul className="todos-list">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleChangeStatus={handleChangeStatus}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleChangeStatus: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
