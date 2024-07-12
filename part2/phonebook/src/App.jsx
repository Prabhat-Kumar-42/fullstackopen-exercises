import { useEffect, useState } from "react";
import PersonForm from "./components/Form/PersonForm/PersonForm";
import PhoneBookDisplay from "./components/PhoneBookDisplay/PhoneBookDisplay";
import FilterForm from "./components/Form/FilterForm/FilterForm";
import Header from "./components/Header/Header";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((resolve) => {
      setPersons(resolve.data);
    });
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some((person) => person.name === newName);
    if (personExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
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
      />
    </>
  );
};

export default App;
