const SearchField = ({ fieldTitle, fieldValue, eventType, eventHandler }) => {
  return (
    <div>
      {fieldTitle}:{" "}
      <input value={fieldValue} {...{ [eventType]: eventHandler }} />
    </div>
  );
};

export default SearchField;
