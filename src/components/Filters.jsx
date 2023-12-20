import PropTypes from "prop-types";

function Filters({ filter, setFilter }) {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter(false)}
        className={filter === "all" ? "active" : "in progress"}
      >
        Active
      </button>
      <button
        onClick={() => setFilter(true)}
        className={filter === "all" ? "active" : "done"}
      >
        Completed
      </button>
    </div>
  );
}
Filters.propTypes = {
  filter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filters;
