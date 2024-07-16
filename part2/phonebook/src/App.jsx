import { useEffect, useState } from "react";
import PersonForm from "./components/Form/PersonForm/PersonForm";
import PhoneBookDisplay from "./components/PhoneBookDisplay/PhoneBookDisplay";
import FilterForm from "./components/Form/FilterForm/FilterForm";
import Header from "./components/Header/Header";
import personsServices from "./services/persons.services";
import SuccessMessageDisplay from "./components/Notifications/SuccessMessageDisplay/SuccessMessageDisplay";
import ErrorMessageDisplay from "./components/Notifications/ErrorMessageDisplay/ErrorMessageDisplay";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    personsServices.getAllUser().then((responseData) => {
      setPersons(responseData);
    });
  }, []);

  const removePersonFromList = (id) => {
    return persons.filter((person) => person.id != id);
  };

  const handleSuccssMessage = (message, timeout) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), timeout);
  };

  const handleErrorMessage = (message, timeout) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(""), timeout);
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    let name = newName;
    name = name.trim();
    let number = newNumber;
    number = number.trim();
    const personIndex = persons.findIndex((person) => person.name === name);
    if (personIndex != -1) {
      const user = persons[personIndex];
      const confirmationMessage = `${user.name} is already added to phonebook, replace old number with a new one?`;
      const confirmation = window.confirm(confirmationMessage);
      if (!confirmation) {
        return;
      }
      const newPerson = { ...user, number: number };
      const response = personsServices.putUser(newPerson);
      response
        .then((responseData) => {
          const newPersonList = [...persons];
          newPersonList[personIndex].number = responseData.number;
          setPersons(newPersonList);
          const message = `Updated ${responseData.name}`;
          const messageTimeout = 3000;
          handleSuccssMessage(message, messageTimeout);
        })
        .catch((error) => {
          const errorStatus = error.response.status;
          let message = error.response.data.error;
          if (errorStatus === 404) {
            const newPersonList = removePersonFromList(user.id);
            setPersons(newPersonList);
            message = `Information of ${newPerson.name} has already been removed from server`;
          }
          const messageTimeout = 3000;
          handleErrorMessage(message, messageTimeout);
        });
    } else {
      const newPerson = { name, number };
      const response = personsServices.createUser(newPerson);
      response
        .then((responseData) => {
          setPersons([...persons, responseData]);
          const message = `Added ${responseData.name}`;
          const messageTimeout = 3000;
          handleSuccssMessage(message, messageTimeout);
        })
        .catch((error) => {
          const message = error.response.data.error;
          const messageTimeout = 3000;
          handleErrorMessage(message, messageTimeout);
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
    response
      .then((responseData) => {
        const newPersonList = removePersonFromList(responseData.id);
        setPersons(newPersonList);
        const message = `Deleted ${responseData.name}`;
        const messageTimeout = 3000;
        handleSuccssMessage(message, messageTimeout);
      })
      .catch((error) => {
        const message = error.response.data.error;
        const messageTimeout = 3000;
        handleErrorMessage(message, messageTimeout);
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
      <ErrorMessageDisplay message={errorMessage} />
      <SuccessMessageDisplay message={successMessage} />
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
