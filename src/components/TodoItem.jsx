import PropTypes from "prop-types";

function TodoItem({ task, handleChangeStatus, handleDeleteTodo }) {
  return (
    <li className="todos-item" key={task.id}>
      <span
        className={task.status === "in progress" ? "status" : "status done"}
        onClick={() => handleChangeStatus(task)}
      ></span>
      <span>{task.title}</span>
      <button className="btn-delete" onClick={() => handleDeleteTodo(task)}>
        delete
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleChangeStatus: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;
