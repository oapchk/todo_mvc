import PropTypes from "prop-types";

export function DeleteAllBtn({ handleDeleteDoneTasks }) {
  return (
    <button className="btn" onClick={handleDeleteDoneTasks}>
      Clear completed
    </button>
  );
}

DeleteAllBtn.propTypes = {
  handleDeleteDoneTasks: PropTypes.func.isRequired,
};

export default DeleteAllBtn;
