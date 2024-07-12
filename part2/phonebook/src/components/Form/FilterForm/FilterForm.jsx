import FormField from "../FormField/FormField";

const FilterForm = ({ filter, handleFilter }) => {
  const fieldTitle = "filter shown with: ";
  const eventType = "onChange";
  return (
    <div>
      <FormField
        fieldTitle={fieldTitle}
        fieldValue={filter}
        eventType={eventType}
        eventHandler={handleFilter}
      />
    </div>
  );
};

export default FilterForm;
