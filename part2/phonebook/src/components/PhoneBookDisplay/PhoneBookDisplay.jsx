import Header from "../Header/Header";
import Button from "../Buttons/Button";

const PhoneBookDisplay = ({ persons, heading, handlerDelete }) => {
  const buttonDeleteInfo = {
    type: "submit",
    text: "delete",
    eventType: "onClick",
    eventHandler: handlerDelete,
  };

  return (
    <div>
      <Header heading={heading} type={2} />
      {persons.map((person) => (
        <div key={person.number}>
          <p>
            {person.name} {person.number}{" "}
            <Button
              type={buttonDeleteInfo.type}
              text={buttonDeleteInfo.text}
              eventType={buttonDeleteInfo.eventType}
              eventHandler={() => buttonDeleteInfo.eventHandler(person)}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default PhoneBookDisplay;
