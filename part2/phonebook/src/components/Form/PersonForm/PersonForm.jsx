import Header from "../../Header/Header";
import FormButton from "../FormButton/FormButton";
import FormField from "../FormField/FormField";

const PersonForm = ({
  formheading,
  name,
  number,
  handlePerson,
  handleName,
  handleNumber,
}) => {
  return (
    <div>
      <Header heading={formheading} type={2} />
      <form onSubmit={handlePerson}>
        <FormField
          fieldTitle={"name"}
          fieldValue={name}
          eventType={"onChange"}
          eventHandler={handleName}
        />
        <FormField
          fieldTitle={"number"}
          fieldValue={number}
          eventType={"onChange"}
          eventHandler={handleNumber}
        />
        <FormButton text={"add"} type={"submit"} />
      </form>
    </div>
  );
};

export default PersonForm;
