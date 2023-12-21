import PropTypes from "prop-types";

const Filters = ({ setFilter }) => {
  const handleFilteredTasks = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  return (
    <div>
      <button onClick={() => handleFilteredTasks("all")}>All</button>
      <button onClick={() => handleFilteredTasks("active")}>Active</button>
      <button onClick={() => handleFilteredTasks("completed")}>
        Completed
      </button>
    </div>
  );
};
Filters.propTypes = {
  // filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filters;
