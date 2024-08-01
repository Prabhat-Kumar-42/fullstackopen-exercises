import { useDispatch, useSelector } from "react-redux";
import { clearFilter, setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleSetFilter = (event) => {
    const filterAction = setFilter(event.target.value);
    dispatch(filterAction);
  };
  const handleClearFilter = () => {
    const filterAction = clearFilter();
    dispatch(filterAction);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleSetFilter} value={filterValue} />
      <button onClick={handleClearFilter}> Clear Filter </button>
    </div>
  );
};

export default Filter;
