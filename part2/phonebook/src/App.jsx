import { useEffect, useState } from "react";
import PersonForm from "./components/Form/PersonForm/PersonForm";
import PhoneBookDisplay from "./components/PhoneBookDisplay/PhoneBookDisplay";
import FilterForm from "./components/Form/FilterForm/FilterForm";
import Header from "./components/Header/Header";
import personsServices from "./services/persons.services";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsServices.getAllUser().then((responseData) => {
      setPersons(responseData);
    });
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();
    const personIndex = persons.findIndex((person) => person.name === newName);
    if (personIndex != -1) {
      const confirmationMessage = `${persons[personIndex].name} is already added to phonebook, replace old number with a new one?`;
      const confirmation = window.confirm(confirmationMessage);
      if (!confirmation) {
        return;
      }
      const newPerson = { ...persons[personIndex], number: newNumber };
      const response = personsServices.putUser(newPerson);
      response.then((responseData) => {
        const newPersonList = [...persons];
        newPersonList[personIndex].number = responseData.number;
        setPersons(newPersonList);
      });
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      const response = personsServices.createUser(newPerson);
      response.then((responseData) => {
        setPersons([...persons, responseData]);
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handleDeletePerson = (user) => {
    const confirmationMessage = `Delete ${user.name} ?`;
    const confirmation = window.confirm(confirmationMessage);
    if (!confirmation) {
      return;
    }
    const response = personsServices.deleteUser(user);
    response.then((responseData) => {
      const newPersonList = persons.filter(
        (person) => person.id != responseData.id,
      );
      setPersons(newPersonList);
    });
  };

  const handleNewName = (event) => {
    const addedName = event.target.value;
    setNewName(addedName);
  };

  const handleNewNumber = (event) => {
    const addedNumber = event.target.value;
    setNewNumber(addedNumber);
  };

  const handleFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };
  const heading = "Phonebook";
  const formHeading = "add a new";
  const phoneBookDisplayTitle = "Numbers";
  const personToDisplay = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : persons;
  return (
    <>
      <Header heading={heading} type={1} />
      <FilterForm filter={filter} handleFilter={handleFilter} />
      <PersonForm
        name={newName}
        number={newNumber}
        handlePerson={handleAddPerson}
        handleName={handleNewName}
        handleNumber={handleNewNumber}
        formheading={formHeading}
      />
      <PhoneBookDisplay
        persons={personToDisplay}
        heading={phoneBookDisplayTitle}
        handlerDelete={handleDeletePerson}
      />
    </>
  );
};

export default App;
