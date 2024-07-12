import Header from "../Header/Header";

const PhoneBookDisplay = ({ persons, heading }) => {
  return (
    <div>
      <Header heading={heading} type={2} />
      {persons.map((person) => (
        <p key={person.number}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default PhoneBookDisplay;
