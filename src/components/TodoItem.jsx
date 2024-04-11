import PropTypes from "prop-types";

function TodoItem({ task, handleChangeStatus, handleDeleteTodo }) {
  return (
    <li className="todos-item" key={task.id}>
      <div className="span">
        <div
          className={task.status === "in progress" ? "status" : "status done"}
          onClick={() => handleChangeStatus(task)}
        ></div>
        <div className="title">{task.title}</div>
      </div>
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
